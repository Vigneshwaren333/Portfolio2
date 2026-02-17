import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { education } from '@/lib/data';

const Education = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card border border-border shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className='flex-grow'>
                  <CardTitle className="text-2xl font-bold text-primary">{edu.qualification}</CardTitle>
                  <p className="text-lg font-medium text-foreground">{edu.institution}</p>
                </div>
                <p className="text-muted-foreground font-semibold shrink-0">{edu.duration}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium">{edu.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Education;
