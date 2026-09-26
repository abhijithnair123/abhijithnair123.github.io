const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Page setup: Standard Letter (612 x 792)
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const colorDark = rgb(0.08, 0.11, 0.16); // #141c29
  const colorBody = rgb(0.2, 0.24, 0.3); // #333d4d
  const colorMuted = rgb(0.4, 0.45, 0.52); // #667385
  const colorOrange = rgb(1.0, 0.34, 0.13); // #ff5722
  const colorLine = rgb(0.85, 0.88, 0.92); // #d9e0eb

  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  function checkPageBreak(neededHeight) {
    if (y - neededHeight < margin) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
      return true;
    }
    return false;
  }

  function drawText(text, x, size, font, color) {
    currentPage.drawText(text, { x, y, size, font, color });
  }

  function drawSectionHeader(title) {
    checkPageBreak(30);
    y -= 10;
    drawText(title.toUpperCase(), margin, 10.5, fontBold, colorOrange);
    
    // Draw subtle underline
    currentPage.drawLine({
      start: { x: margin, y: y - 3 },
      end: { x: pageWidth - margin, y: y - 3 },
      thickness: 1,
      color: colorLine,
    });
    y -= 13;
  }

  function drawWrappedText(text, x, maxWidth, size, font, color, lineHeight = 12) {
    const words = text.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > maxWidth && currentLine) {
        checkPageBreak(lineHeight);
        drawText(currentLine, x, size, font, color);
        y -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      checkPageBreak(lineHeight);
      drawText(currentLine, x, size, font, color);
      y -= lineHeight;
    }
  }

  function drawBullet(text, indent = 12) {
    checkPageBreak(14);
    const bulletX = margin + indent;
    const textX = bulletX + 10;
    const textWidth = contentWidth - indent - 10;
    
    // Draw bullet dot
    currentPage.drawCircle({
      x: bulletX + 2,
      y: y + 3,
      size: 2,
      color: colorOrange,
    });

    drawWrappedText(text, textX, textWidth, 8.5, fontRegular, colorBody, 11.5);
    y -= 1;
  }

  // ================= PAGE 1 =================

  // Name Header
  drawText('ABHIJITH H NAIR', margin, 19, fontBold, colorDark);
  y -= 15;

  // Contact Info Line 1
  const contactLine1 = '+91 6282801344  |  Thiruvananthapuram, Kerala, India  |  contact@abhijithhnair.in';
  drawText(contactLine1, margin, 8.5, fontRegular, colorMuted);
  y -= 11;

  // Contact Info Line 2 (Links)
  const contactLine2 = 'linkedin.com/in/abhijith-h-nair-394606130  |  github.com/abhijithnair123  |  abhijithnair123.github.io';
  drawText(contactLine2, margin, 8.5, fontRegular, colorOrange);
  y -= 10;

  // Subtle Header Divider
  currentPage.drawLine({
    start: { x: margin, y: y },
    end: { x: pageWidth - margin, y: y },
    thickness: 1.5,
    color: colorOrange,
  });
  y -= 4;

  // OBJECTIVE / SUMMARY
  drawSectionHeader('Professional Summary');
  const summaryText =
    'Senior Software Developer & Full-Stack Engineer with 6+ years of expertise architecting high-performance web applications across Angular, Next.js, React.js, Node.js, TypeScript, and microservices architectures. Currently engineering Way.com’s high-traffic Carwash SaaS product. Previously directed a squad of 12 developers at IBIL Solutions, delivering enterprise platforms with SSR/SSG optimizations (+25% page speed boost), automated CI/CD pipelines, live video streaming, and secure payment systems.';
  drawWrappedText(summaryText, margin, contentWidth, 8.75, fontRegular, colorBody, 12);

  // TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skillsList = [
    { label: 'Languages', value: 'TypeScript, JavaScript (ES6+), PHP, HTML5, CSS3, SCSS, SQL' },
    { label: 'Frameworks & Frontend', value: 'Angular (v17/v18), Next.js (App & Pages Router), React.js, RxJS, Redux, Context API, Tailwind CSS, Bootstrap' },
    { label: 'Backend & APIs', value: 'Node.js, Express.js, Laravel, RESTful APIs, WebSockets (Socket.io), Microservices Architecture' },
    { label: 'Databases & Storage', value: 'PostgreSQL, MongoDB, MySQL, Redis Caching, AWS S3' },
    { label: 'Cloud & DevOps', value: 'AWS (EC2, S3), Docker, GitHub Actions (CI/CD), Vercel' },
    { label: 'Developer Tools', value: 'Git, GitHub, JIRA, Trello, Postman, Webpack, Vite, Slack, Agile / Scrum Methodology' },
    { label: 'Integrations & Specialized', value: 'Stripe, CyberSource, Wowza Streaming Engine, Video.js, Joyfill Form Builder, Avalara Tax, GoShippo, HIPAA Standards' },
  ];

  for (const s of skillsList) {
    checkPageBreak(13);
    drawText(`•  ${s.label}: `, margin, 8.5, fontBold, colorDark);
    const labelWidth = fontBold.widthOfTextAtSize(`•  ${s.label}: `, 8.5);
    drawWrappedText(s.value, margin + labelWidth, contentWidth - labelWidth, 8.5, fontRegular, colorBody, 11);
  }

  // PROFESSIONAL EXPERIENCE
  drawSectionHeader('Professional Experience');

  // Role 1: Way.com
  checkPageBreak(40);
  drawText('Senior Software Developer', margin, 11, fontBold, colorDark);
  const dateWay = 'July 2026 – Present';
  const dateWayWidth = fontBold.widthOfTextAtSize(dateWay, 9);
  drawText(dateWay, pageWidth - margin - dateWayWidth, 9, fontBold, colorOrange);
  y -= 13;

  drawText('Way.com  •  Carwash SaaS Product', margin, 9.5, fontOblique, colorMuted);
  const locWay = 'Kerala, India / Remote';
  const locWayWidth = fontRegular.widthOfTextAtSize(locWay, 8.5);
  drawText(locWay, pageWidth - margin - locWayWidth, 8.5, fontRegular, colorMuted);
  y -= 14;

  drawBullet('Engineering Way.com’s flagship Carwash SaaS platform, powering customer carwash subscription passes, partner merchant portals, slot scheduling, and contactless QR redemptions across hundreds of US locations.');
  drawBullet('Architecting reactive front-end modules, merchant administration portals, and state management using Angular (v17/v18), TypeScript, and RxJS.');
  drawBullet('Developing scalable backend microservices and RESTful API endpoints with Node.js to power real-time carwash booking, subscription pass activations, and barcode/QR redemptions.');
  drawBullet('Integrating third-party POS hardware, merchant APIs, and payment rails for automated wash validations across partner carwash operators.');
  drawBullet('Optimizing checkout performance and mobile web speed, reducing latency and operational friction.');

  y -= 8;

  // Role 2: IBIL Solutions
  checkPageBreak(40);
  drawText('Senior Software Developer & Engineering Lead', margin, 11, fontBold, colorDark);
  const dateIbil = 'Feb 2020 – July 2026';
  const dateIbilWidth = fontBold.widthOfTextAtSize(dateIbil, 9);
  drawText(dateIbil, pageWidth - margin - dateIbilWidth, 9, fontBold, colorOrange);
  y -= 13;

  drawText('IBIL Solutions', margin, 9.5, fontOblique, colorMuted);
  const locIbil = 'Kerala, India';
  const locIbilWidth = fontRegular.widthOfTextAtSize(locIbil, 8.5);
  drawText(locIbil, pageWidth - margin - locIbilWidth, 8.5, fontRegular, colorMuted);
  y -= 14;

  drawBullet('Directed a cross-functional squad of 12 developers in the successful delivery of high-visibility Next.js enterprise web applications, ensuring strict alignment with business goals and timelines.');
  drawBullet('Spearheaded the implementation of Next.js architecture leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG), improving page load times by 25%+ and dramatically improving SEO rankings.');
  drawBullet('Configured automated CI/CD deployment pipelines using GitHub Actions, streamlining software delivery and zero-downtime production releases.');
  drawBullet('Architected dynamic, responsive user interfaces using React.js, TypeScript, Redux, Context API, Tailwind CSS, and modular design systems.');
  drawBullet('Conducted thorough code reviews to maintain high standards of code quality, readability, security, and performance.');
  drawBullet('Mentored junior developers, facilitating daily stand-ups, sprint planning, and retrospective meetings using Agile/Scrum methodologies.');

  y -= 8;

  // Role 3: Cankado
  checkPageBreak(40);
  drawText('WordPress & Frontend Developer', margin, 11, fontBold, colorDark);
  const dateCankado = 'August 2019 – January 2020';
  const dateCankadoWidth = fontBold.widthOfTextAtSize(dateCankado, 9);
  drawText(dateCankado, pageWidth - margin - dateCankadoWidth, 9, fontBold, colorOrange);
  y -= 13;

  drawText('Cankado India Pvt Ltd  •  Digital Health & Oncology', margin, 9.5, fontOblique, colorMuted);
  const locCankado = 'Kerala, India';
  const locCankadoWidth = fontRegular.widthOfTextAtSize(locCankado, 8.5);
  drawText(locCankado, pageWidth - margin - locCankadoWidth, 8.5, fontRegular, colorMuted);
  y -= 14;

  drawBullet('Built and designed responsive web pages and digital health user interfaces using WordPress, HTML5, CSS3, JavaScript, and PHP.');
  drawBullet('Integrated Stripe payment gateway into web applications for secure and streamlined transaction processing.');
  drawBullet('Designed and implemented custom page layouts using Elementor, ensuring user-friendly and accessible medical interfaces.');
  drawBullet('Developed and integrated custom widgets and plugins to extend Elementor functionality for clinical oncology requirements.');

  // ================= PAGE 2 =================
  currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  y = pageHeight - margin;

  // KEY PRODUCTION PROJECTS
  drawSectionHeader('Featured Production Platforms');

  const projects = [
    {
      title: 'Way.com – Carwash SaaS Platform (Angular, Node.js, RxJS, PostgreSQL)',
      desc: 'Enterprise carwash subscription engine, partner merchant portals, slot scheduling, and contactless QR redemptions across hundreds of US locations.'
    },
    {
      title: 'Video Social Marketplace (Next.js, Node.js, Wowza, CyberSource, Avalara, GoShippo)',
      desc: 'Large-scale live streaming video and creator social commerce platform with Wowza Engine, Video.js, CyberSource payments, and Avalara sales tax.'
    },
    {
      title: 'Contract Q – Builder & Contractor Enterprise Platform (Next.js, TypeScript, Joyfill)',
      desc: 'Job dispatch and dynamic customer estimation workflow system with Joyfill form builder and high-efficiency state synchronization.'
    },
    {
      title: 'HASHAPP – Crypto-Social Platform (Next.js, TypeScript, Node.js, Stripe, Socket.io)',
      desc: 'Blockchain engagement network with micropayments, collage media editor, real-time WebSockets, and Stripe subscription checkouts.'
    },
    {
      title: 'Intellicp Pharmacovigilance & CANKADO Oncology Health (React.js, MongoDB, HIPAA)',
      desc: 'HIPAA-compliant medical safety extraction tool compiling automated ICSRs, and oncology patient-reported symptom tracking (ePRO).'
    }
  ];

  for (const p of projects) {
    checkPageBreak(28);
    drawText(p.title, margin + 4, 9, fontBold, colorDark);
    y -= 12;
    drawWrappedText(p.desc, margin + 12, contentWidth - 12, 8.5, fontRegular, colorBody, 11.5);
    y -= 5;
  }

  // ARCHITECTURAL HIGHLIGHTS & LEADERSHIP
  drawSectionHeader('Architectural Competencies & Engineering Leadership');

  const archHighlights = [
    {
      title: 'Frontend Architecture & Performance Optimization',
      desc: 'Expertise in Next.js (App & Pages Router SSR/SSG) and Angular (v17/v18 with RxJS). Implemented code splitting, on-demand revalidation, and caching to boost platform load speeds by 25%+.'
    },
    {
      title: 'High-Concurrency Backend & Microservices',
      desc: 'Designed scalable Node.js microservices, RESTful APIs, and real-time Socket.io WebSockets pipelines powering live chat, order processing, and POS hardware barcode validations.'
    },
    {
      title: 'FinTech, E-Commerce & Third-Party Integrations',
      desc: 'Architected multi-gateway payment processing with Stripe and CyberSource, automated tax compliance via Avalara, shipping with GoShippo, and dynamic forms with Joyfill.'
    },
    {
      title: 'Engineering Squad Direction & DevOps',
      desc: 'Directed squads of 12+ developers at IBIL Solutions, driving sprint planning, code review standards, zero-downtime CI/CD deployment automation (GitHub Actions), and mentorship.'
    }
  ];

  for (const a of archHighlights) {
    checkPageBreak(28);
    drawText(`•  ${a.title}: `, margin + 4, 8.75, fontBold, colorDark);
    const titleWidth = fontBold.widthOfTextAtSize(`•  ${a.title}: `, 8.75);
    drawWrappedText(a.desc, margin + titleWidth, contentWidth - titleWidth, 8.5, fontRegular, colorBody, 11.5);
    y -= 4;
  }

  // EDUCATION
  drawSectionHeader('Education');

  checkPageBreak(26);
  drawText('Bachelor of Technology (B.Tech) in Computer Science & Engineering', margin, 9.5, fontBold, colorDark);
  const dateBtech = '2015 – 2019';
  const dateBtechWidth = fontBold.widthOfTextAtSize(dateBtech, 8.5);
  drawText(dateBtech, pageWidth - margin - dateBtechWidth, 8.5, fontBold, colorOrange);
  y -= 12;
  drawText('APJ Abdul Kalam Technological University  •  Kerala, India', margin, 8.5, fontRegular, colorMuted);
  y -= 14;

  checkPageBreak(26);
  drawText('Higher Secondary Education (Computer Science)', margin, 9.5, fontBold, colorDark);
  const dateHs = '2013 – 2015';
  const dateHsWidth = fontBold.widthOfTextAtSize(dateHs, 8.5);
  drawText(dateHs, pageWidth - margin - dateHsWidth, 8.5, fontBold, colorOrange);
  y -= 12;
  drawText('AMHSS, Thirumala  •  Kerala, India', margin, 8.5, fontRegular, colorMuted);
  y -= 14;

  checkPageBreak(26);
  drawText('High School Education (Secondary Certificate)', margin, 9.5, fontBold, colorDark);
  drawText('Trivandrum, Kerala', pageWidth - margin - fontRegular.widthOfTextAtSize('Trivandrum, Kerala', 8.5), 8.5, fontRegular, colorMuted);
  y -= 12;
  drawText('Sree Vidhyadhi Raja Vidhya Mandir, Vellayambalam  •  Kerala, India', margin, 8.5, fontRegular, colorMuted);
  y -= 14;

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(__dirname, '../public/abhijith.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated updated resume at:', outputPath);
}

createResume().catch(console.error);
