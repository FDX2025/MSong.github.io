/*  ============================================================
    SITE DATA — Edit your content here!
    ============================================================
    To update your website, just edit the values below.
    No need to touch HTML.
    ============================================================ */

const SITE_DATA = {

  /* ---------- PROFILE ---------- */
  profile: {
    name: { first: 'Menglin', last: 'Song' },
    title: 'PhD Researcher · Cambridge',
    degree: 'PhD in Electrical Engineering',
    institution: 'University of Cambridge',
    intro: 'I am a PhD student at the University of Cambridge, and I obtained my Master\'s degree in Integrated Circuit Design from The Hong Kong University of Science and Technology.',
    researchInterests: 'computer architecture, neuromorphic computing, hardware-algorithm co-design, and computing in memory',
    photo: 'image/dr.bear.jpg',
    email: 'ms3169@cam.ac.uk',
    linkedin: 'https://www.linkedin.com/in/menglin-song-2473822aa/',
  },

  /* ---------- HONORS ---------- */
  honors: [
    {
      title: 'Entrance Scholarship — HKUST',
      description: 'Ranked in the top 10% of the major at the School of Engineering, The Hong Kong University of Science and Technology.',
    },
    {
      title: 'Best Graduation Thesis',
      description: 'Only one awarded in the major — top 2% in the bachelor\'s school at Southwest Jiaotong University.',
    },
    {
      title: 'Third Prize — IC EDA Elite Challenge',
      description: 'National-level Integrated Circuit EDA Elite Challenge competition.',
    },
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    {
      logo: 'image/CAM.png',
      institution: 'University of Cambridge & UCL',
      degree: 'MRes + PhD in Connected Electronic and Photonic Systems',
      period: '2024.09 — 2028.06',
    },
    {
      logo: 'image/HKUST.png',
      institution: 'The Hong Kong University of Science and Technology',
      degree: 'Master of Science in IC Design Engineering',
      period: '2023.09 — 2024.06',
    },
    {
      logo: 'image/SWJTU.png',
      institution: 'Southwest Jiaotong University',
      degree: 'Bachelor of Engineering in Electronic Science and Technology',
      period: '2018.09 — 2022.06',
    },
  ],

  /* ---------- RESEARCH ---------- */
  research: [
    {
      title: 'Dual-Coding Neuromorphic Accelerator Architecture for Event-Driven Computing',
      summary: 'Dual-pathway spiking neural network integrating TTFS and rate coding for unified static and event-based vision inference.',
      detail: 'Designed a dual-pathway SNN integrating TTFS (low-latency) and rate coding (high-accuracy), enabling unified inference for static and event-based vision. Built an end-to-end PyTorch framework with dual-path parameterization, gating mechanism, temporal readout heads, learnable fusion, and multi-scale supervision. Mapped the SNN to In-memory (Memristor) and near-memory (SRAM) architectures, with a SystemVerilog-based design including adaptive input routing, bank scheduling, PE arrays, and neuron pipelines. Completed full ASIC flow and tape-out using TSMC 180nm process.',
      tags: ['Neuromorphic Computing', 'SNN', 'ASIC', 'Memristor'],
    },
    {
      title: 'PDE-Based Joint Placement–Routing Optimizer for 2.5D Multi-Die FPGAs',
      summary: 'PDE-based continuum framework unifying placement and routing under conservation and capacity constraints for 2.5D FPGAs.',
      detail: 'Proposed a PDE-based continuum framework that unifies placement (density field) and routing (flow field) under conservation and capacity constraints, targeting 2.5D FPGA systems. Designed a density-dependent routing capacity model enabling bidirectional feedback between congestion formation and placement redistribution. Developed an ADMM-based solver integrating PGD and PDHG subroutines with regularization for stable convergence. Built a modular PyTorch framework with configurable grid resolution, YAML-based parameter control, synthetic benchmark generation, and visualization tools.',
      tags: ['EDA', 'FPGA', 'PDE', 'Optimization'],
    },
  ],

  /* ---------- PUBLICATIONS ---------- */
  publications: [
    {
      type: 'conference',
      title: 'Bio-Inspired Neuromorphic Computing with Memristor-Based Sparse Event-Driven (MSE)',
      authors: 'M. Song, A. Flewitt',
      venue: 'The 8th International Conference on Memristive Materials, Devices & Systems (MEMRISYS 2025)',
      year: '2025',
      badges: [],
      abstract: 'This work forms part of the research on the Dual-Coding Neuromorphic Accelerator Architecture for Event-Driven Computing.',
      link: '#',
    },
    {
      type: 'journal',
      title: 'GreenWave: PDE-based Joint Placement–Routing Framework for Multi-Die FPGAs',
      authors: 'M. Song, A. Flewitt, W. Zhang',
      venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems',
      year: '',
      badges: ['Under Review'],
      abstract: 'A PDE-based continuum framework that unifies placement and routing under conservation and capacity constraints, targeting 2.5D FPGA systems with superior congestion-wirelength trade-offs.',
      link: '',
    },
    {
      type: 'journal',
      title: 'A Novel Passive Intermodulation Model of Coaxial Cable Assemblies with Distributed and Point-source Nonlinearities',
      authors: 'R. Liu, Q. Jin, M. Song, et al.',
      venue: 'IEEE Transactions on Electromagnetic Compatibility',
      year: '2024',
      badges: ['SCI'],
      abstract: 'A novel PIM model for coaxial cable assemblies, distinguishing between distributed and point-source nonlinearities. The approach provides improved physical insight and prediction accuracy for complex cable assembly systems under realistic operating conditions.',
      link: '#',
    },
    {
      type: 'journal',
      title: 'High-precision Mathematical Modelling of Passive Intermodulation in Connectors',
      authors: 'M. Song, Q. Jin',
      venue: 'Electronics Letters',
      year: '2022',
      badges: ['SCI'],
      abstract: 'A high-precision mathematical framework for modelling passive intermodulation (PIM) phenomena in connector assemblies. The model achieves improved accuracy over existing approaches by incorporating higher-order nonlinear contributions and a systematic parameter fitting methodology.',
      link: '#',
    },
    {
      type: 'patent',
      title: 'A Fitting Method for a Passive Intermodulation (PIM) Mathematical Model',
      authors: 'Patent No. 023108822605',
      venue: '',
      year: '',
      badges: [],
      abstract: 'A fitting method covering passive intermodulation mathematical models, providing a systematic approach to parameter estimation and model calibration suitable for engineering applications in high-frequency connector and cable assembly systems.',
      link: '',
    },
  ],

  /* ---------- NEWS ---------- */
  news: [
    { date: '2024.07', year: '2024', text: 'Sharing experiences as an outstanding graduate of HKUST in ICDE.' },
    { date: '2024.04', year: '2024', text: 'Received offer of the PhD programme in Connected Electronic and Photonic Systems from the University of Cambridge and UCL.' },
    { date: '2024.02', year: '2024', text: '"A Novel Passive Intermodulation Model of Coaxial Cable Assemblies with Distributed and Point-source Nonlinearities" accepted.' },
    { date: '2023.12', year: '2023', text: 'Won Third Prize in the Integrated Circuit EDA Elite Challenge at the national level.' },
    { date: '2023.10', year: '2023', text: 'Obtained the Entrance Scholarship Prize from the School of Engineering in HKUST.' },
    { date: '2023.09', year: '2023', text: 'Started MSc study at HKUST.' },
    { date: '2023.08', year: '2023', text: 'Successfully submitted the thesis: "A Novel Passive Intermodulation Model of Coaxial Cable Assemblies with Distributed and Point-source Nonlinearities".' },
    { date: '2023.07', year: '2023', text: 'Participated in the Advanced Integrated Circuit EDA Summer Conference conducted by Beijing University.' },
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      logo: 'image/TI.png',
      company: 'Texas Instruments',
      role: 'Chip Product Engineer',
      period: '2022.07 — 2023.06',
      locations: ['Chengdu, China', 'Dallas, USA', 'Kuala Lumpur, Malaysia'],
      points: [
        'Participated in R&D of next-generation automation technologies for the semiconductor industry, focusing on sensor chips used in multiple applications',
        'Collaborated with global design and test teams to evaluate and implement new validation solutions, improving DLP chip quality, productivity, and cost efficiency',
        'Worked with development and manufacturing sites to support new initiatives including AGV systems, factory automation, Center PMI, AI, and big data applications',
        'Selected to participate in global sensor product R&D projects at research centers in Dallas and Tucson, USA, and joined advanced test plan development at the Asian headquarters in Malaysia',
      ],
    },
  ],

  /* ---------- INVITED TALKS ---------- */
  talks: [
    { date: '2021.06', text: 'Invited talk — details to be added', videoLink: '' },
    { date: '2021.03', text: 'Invited talk — details to be added', videoLink: '#' },
  ],

};
