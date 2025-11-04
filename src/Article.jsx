
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Article } from "@/entities/Article";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Calendar, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlePage() {
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const params = new URLSearchParams(location.search);
      const slug = params.get('slug');
      if (slug) {
        setIsLoading(true);
        const articles = await Article.filter({ slug: slug });
        if (articles.length > 0) {
          setArticle(articles[0]);
        }
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [location.search]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-6 w-1/2 mb-12" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full mt-6" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center space-x-6 text-slate-600 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.image && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          )}

          <div className="prose max-w-none" style={{ lineHeight: '1.6' }}>
            <ReactMarkdown
              components={{
                h2: ({node, ...props}) => (
                  <h2 
                    className="font-bold text-slate-900 mt-8 mb-4" 
                    style={{ fontSize: '16px', lineHeight: '1.4' }}
                    {...props} 
                  />
                ),
                h3: ({node, ...props}) => (
                  <h3 
                    className="font-bold text-slate-900 mt-6 mb-3" 
                    style={{ fontSize: '16px', lineHeight: '1.4' }}
                    {...props} 
                  />
                ),
                p: ({node, ...props}) => (
                  <p 
                    className="text-slate-700 mb-4" 
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                    {...props} 
                  />
                ),
                ul: ({node, ...props}) => (
                  <ul 
                    className="list-disc ml-6 mb-4 space-y-2" 
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                    {...props} 
                  />
                ),
                li: ({node, ...props}) => (
                  <li 
                    className="text-slate-700" 
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                    {...props} 
                  />
                ),
                strong: ({node, ...props}) => (
                  <strong 
                    className="font-bold text-slate-900" 
                    {...props} 
                  />
                ),
                em: ({node, ...props}) => (
                  <em 
                    className="italic text-slate-600" 
                    style={{ fontSize: '16px' }}
                    {...props} 
                  />
                ),
                blockquote: ({node, ...props}) => (
                  <blockquote 
                    className="border-l-4 border-indigo-300 bg-indigo-50/30 p-4 my-6 italic text-slate-600" 
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                    {...props} 
                  />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}
