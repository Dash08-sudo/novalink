
import React, { useState, useEffect, useRef } from "react";
import { User } from "@/entities/User";
import { UploadFile } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  UserCircle, 
  Edit3, 
  Save, 
  X, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Plus,
  Upload
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({});
  const [newInterest, setNewInterest] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const currentUser = await User.me();
      setUser(currentUser);
      setFormData(currentUser);
    } catch (error) {
      console.error("Error loading user profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await User.updateMyUserData(formData);
      const updatedUser = await User.me(); // Fetch latest data
      setUser(updatedUser);
      setFormData(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsSaving(true);
      try {
        const { file_url } = await UploadFile({ file });
        // Update formData locally immediately for responsiveness
        setFormData(prev => ({ ...prev, profile_picture: file_url }));
        
        // Also save it immediately to the backend
        await User.updateMyUserData({ ...formData, profile_picture: file_url });
        
        // Fetch the latest user data to ensure UI is fully synced
        const updatedUser = await User.me();
        setUser(updatedUser);
        setFormData(updatedUser);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const addInterest = () => {
    if (newInterest.trim()) {
      const interests = formData.interests || [];
      setFormData(prev => ({
        ...prev,
        interests: [...interests, newInterest.trim()]
      }));
      setNewInterest("");
    }
  };

  const removeInterest = (indexToRemove) => {
    const interests = formData.interests || [];
    setFormData(prev => ({
      ...prev,
      interests: interests.filter((_, index) => index !== indexToRemove)
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile not found</h1>
          <p className="text-gray-600">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-24"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-12 mb-6">
              <div className="relative">
                {formData.profile_picture ? (
                  <img
                    src={formData.profile_picture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  />
                ) : (
                  <UserCircle className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 text-gray-400" />
                )}
                {isEditing && (
                  <>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                      disabled={isSaving}
                    />
                    <button
                      onClick={triggerFileSelect}
                      className="absolute bottom-0 right-0 bg-white rounded-full p-1 border shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSaving}
                      aria-label="Upload profile picture"
                    >
                      <Upload className="w-4 h-4 text-gray-600" />
                    </button>
                  </>
                )}
              </div>
              <div className="sm:ml-4 mt-4 sm:mt-0 flex-grow">
                <h1 className="text-2xl font-bold text-gray-900">{user.full_name}</h1>
                <p className="text-sm text-gray-500">{formData.position || 'Position'} at {formData.company || 'Company'}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>
                    <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button onClick={handleSave} disabled={isSaving}>
                      {isSaving ? 'Saving...' : <><Save className="mr-2 h-4 w-4" /> Save</>}
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="mr-2 h-4 w-4" /> Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
              {isEditing ? (
                <Textarea
                  value={formData.bio || ''}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Tell us about yourself..."
                  className="h-24"
                  disabled={isSaving}
                />
              ) : (
                <p className="text-gray-600">{formData.bio || 'No bio provided.'}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h2>
              <div className="space-y-4">
                {/* Company */}
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Input
                      value={formData.company || ''}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Company"
                      disabled={isSaving}
                    />
                  ) : (
                    <span>{formData.company || 'Not specified'}</span>
                  )}
                </div>
                {/* Position */}
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Input
                      value={formData.position || ''}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="Position"
                      disabled={isSaving}
                    />
                  ) : (
                    <span>{formData.position || 'Not specified'}</span>
                  )}
                </div>
                {/* Industry */}
                <div className="flex items-center">
                   <Briefcase className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Select
                      value={formData.industry || ''}
                      onValueChange={(value) => handleInputChange('industry', value)}
                      disabled={isSaving}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Consulting">Consulting</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <span>{formData.industry || 'Not specified'}</span>
                  )}
                </div>
                {/* Experience Level */}
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Select
                      value={formData.experience_level || ''}
                      onValueChange={(value) => handleInputChange('experience_level', value)}
                      disabled={isSaving}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Experience Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Entry Level">Entry Level</SelectItem>
                        <SelectItem value="Mid Level">Mid Level</SelectItem>
                        <SelectItem value="Senior Level">Senior Level</SelectItem>
                        <SelectItem value="Executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <span>{formData.experience_level || 'Not specified'}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Input
                      value={formData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Phone Number"
                      disabled={isSaving}
                    />
                  ) : (
                    <span>{formData.phone || 'Not specified'}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Input
                      value={formData.location || ''}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Location (e.g., City, State)"
                      disabled={isSaving}
                    />
                  ) : (
                    <span>{formData.location || 'Not specified'}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-gray-400 mr-4" />
                  {isEditing ? (
                    <Input
                      value={formData.linkedin_url || ''}
                      onChange={(e) => handleInputChange('linkedin_url', e.target.value)}
                      placeholder="LinkedIn Profile URL"
                      disabled={isSaving}
                    />
                  ) : (
                    <a href={formData.linkedin_url || '#'} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                      {formData.linkedin_url ? 'View LinkedIn' : 'Not specified'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Interests & Skills</h2>
          <div className="flex flex-wrap gap-2">
            {(formData.interests || []).map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {interest}
                {isEditing && (
                  <button 
                    onClick={() => removeInterest(index)} 
                    className="ml-2 text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSaving}
                    aria-label={`Remove interest ${interest}`}
                  >
                    <X size={12} />
                  </button>
                )}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2 mt-4">
              <Input
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                placeholder="Add an interest"
                onKeyDown={(e) => e.key === 'Enter' && addInterest()}
                disabled={isSaving}
              />
              <Button onClick={addInterest} variant="outline" disabled={isSaving}>
                <Plus size={16} />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}