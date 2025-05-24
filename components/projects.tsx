import { Card, CardContent } from '@/components/ui/card';

export default function Projects() {
  const projects = [
    {
      title: 'Video-Social-MarketPlace',
      description:
        'This application is designed for families, friends, video creators, brand influencers, and online sellers. It helps users connect with like-minded individuals, forge new friendships, cultivate business partnerships, and foster creative collaborations. Users can participate as content creators or viewers',
      tags: ['JavaScript', 'Laravel', 'Socket IO', 'NextJS'],
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'Contract Q',
      description:
        'Developed a comprehensive web application using Next.js with TypeScript for builders and contractors. The application facilitates the tracking and assignment of work to employees, as well as the creation and management of estimation forms for customers',
      tags: ['TypeScript', 'NodeJS', 'NextJS'],
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'HASHAPP',
      description:
        'Hashapp is a crypto-social platform powered by blockchain technology that rewards its members with micropayments for engaging on the platform. The application also serves as an educational hub, offering valuable knowledge about medical cannabis and other plant-powered therapies.',
      tags: ['Node.js', 'TypeScript', 'NextJS'],
      codeLink: '',
      liveLink: null,
    },
    {
      title: 'Intellicp',
      description:
        'A pharmacovigilance tool for the healthcare domain which can process formatted MLM and spontaneous source documents and create ICSRs',
      tags: ['Python', 'Java', 'ReactJS', 'UI Path'],
      codeLink: '',
      liveLink: null,
    },
    {
      title: 'Cargo Dashboard',
      description:
        'A cargo dashboard management system designed to streamline shipping-related operations. Built using Next.js and TypeScript',
      tags: ['Node.js', 'TypeScript', 'NextJS'],
      codeLink: '',
      liveLink: null,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
