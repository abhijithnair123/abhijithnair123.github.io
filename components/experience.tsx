import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Skills from './skills-content';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Ibil Solutions',
      period: 'FEB 2020 - Present',
      location: 'Kerala, India',
      achievements: [
        'Directed a cross-functional team of 12 developers in the successful delivery of a high-visibility Next.js project,ensuring alignment with business goals and timelines. ',
        'Mentored junior developers, providing guidance on best practices in Next.js, React, and modern web development techniques.',
        'Facilitated daily stand-ups, sprint planning, and retrospective meetings using Agile methodologies to ensure continuous improvement and timely delivery',
        'Spearheaded the implementation of Next.js for the project, leveraging its server-side rendering and static site generation capabilities to enhance performance and SEO',
        'Conducted thorough code reviews to maintain high standards of code quality, readability, and performance optimization',
      ],
    },
    {
      title: 'Wordpress Developer',
      company: 'Cankado India Pvt Ltd',
      period: 'Aug 2019 - Jan 2020',
      location: 'Kerala, India',
      achievements: [
        'Built and Designed Web Pages using WordPress',
        'Integrated Stripe Payment in WordPress',
        'Expertly used Elementor to design and implement custom page layouts, ensuring a user-friendly and visually appealing website.',
        'Developed and integrated custom widgets and plugins to extend Elementor’s functionality, tailored to meet specific project requirements',
        'Utilized WordPress, Elementor, HTML, CSS, JavaScript, and PHP to develop and customize the website',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
