export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: 'logo' | 'flier' | 'other';
  description?: string;
}

// Mock project data simulating a 3rd party API
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Luxe Fashion Brand Logo',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop',
    category: 'logo',
    description: 'Elegant logo design for a high-end fashion boutique featuring custom typography and gold accents'
  },
  {
    id: '2',
    title: 'Summer Music Festival Flier',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop',
    category: 'flier',
    description: 'Vibrant promotional flier for a summer music festival with bold graphics and dynamic layout'
  },
  {
    id: '3',
    title: 'Tech Startup Brand Identity',
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=700&fit=crop',
    category: 'logo',
    description: 'Complete brand identity package for a fintech startup including logo variations and brand guidelines'
  },
  {
    id: '4',
    title: 'Corporate Excellence Logo',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=550&fit=crop',
    category: 'logo',
    description: 'Professional corporate logo design emphasizing trust and innovation'
  },
  {
    id: '5',
    title: 'Product Launch Campaign',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=650&fit=crop',
    category: 'flier',
    description: 'Eye-catching product launch promotional material with modern design elements'
  },
  {
    id: '6',
    title: 'Artisan Restaurant Branding',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
    category: 'logo',
    description: 'Sophisticated restaurant logo with custom hand-lettered typography and organic elements'
  },
  {
    id: '7',
    title: 'Design Conference Promotion',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=750&fit=crop',
    category: 'flier',
    description: 'Professional conference promotional design featuring clean typography and geometric patterns'
  },
  {
    id: '8',
    title: 'Innovation Hub Logo',
    imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=500&fit=crop',
    category: 'logo',
    description: 'Forward-thinking logo design for a technology innovation center'
  },
  {
    id: '9',
    title: 'Fashion Week Showcase',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=800&fit=crop',
    category: 'flier',
    description: 'Elegant fashion show promotional material with sophisticated color palette'
  },
  {
    id: '10',
    title: 'E-commerce Platform Identity',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=550&fit=crop',
    category: 'logo',
    description: 'Modern e-commerce platform logo emphasizing connectivity and user experience'
  },
  {
    id: '11',
    title: 'Creative Workshop Series',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=650&fit=crop',
    category: 'flier',
    description: 'Inspiring workshop promotional design with artistic elements and vibrant colors'
  },
  {
    id: '12',
    title: 'Healthcare Innovation Logo',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop',
    category: 'logo',
    description: 'Trust-inspiring healthcare logo design combining medical symbolism with modern aesthetics'
  },
  {
    id: '13',
    title: 'Contemporary Art Exhibition',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=900&fit=crop',
    category: 'flier',
    description: 'Artistic exhibition promotional design featuring bold typography and abstract elements'
  },
  {
    id: '14',
    title: 'Athletic Performance Brand',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=450&fit=crop',
    category: 'logo',
    description: 'Dynamic sports brand logo with energetic typography and motion-inspired elements'
  },
  {
    id: '15',
    title: 'Community Impact Campaign',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=700&fit=crop',
    category: 'flier',
    description: 'Heartwarming charity event promotional design emphasizing community and connection'
  },
  {
    id: '16',
    title: 'Future Tech Conference',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=520&fit=crop',
    category: 'logo',
    description: 'Futuristic conference logo design incorporating cutting-edge visual elements'
  },
  {
    id: '17',
    title: 'Culinary Festival Celebration',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=850&fit=crop',
    category: 'flier',
    description: 'Appetizing food festival promotional design with rich colors and appetizing imagery'
  },
  {
    id: '18',
    title: 'Luxury Boutique Identity',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=580&fit=crop',
    category: 'logo',
    description: 'Refined boutique logo with sophisticated styling and premium feel'
  },
  {
    id: '19',
    title: 'Literary Event Promotion',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=750&fit=crop',
    category: 'flier',
    description: 'Elegant book launch promotional design with literary-inspired typography'
  },
  {
    id: '20',
    title: 'Wellness Studio Branding',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=480&fit=crop',
    category: 'logo',
    description: 'Calming wellness studio logo emphasizing balance and mindfulness'
  },
  {
    id: '21',
    title: 'Electronic Music Experience',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=950&fit=crop',
    category: 'flier',
    description: 'High-energy electronic music event promotion with dynamic visual effects'
  },
  {
    id: '22',
    title: 'Premium Real Estate Brand',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=540&fit=crop',
    category: 'logo',
    description: 'Prestigious real estate agency logo conveying luxury and professionalism'
  },
  {
    id: '23',
    title: 'Community Festival Celebration',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=680&fit=crop',
    category: 'flier',
    description: 'Welcoming community event promotional design celebrating local culture and unity'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockApi = {
  // Get all projects
  async getProjects(): Promise<Project[]> {
    await delay(500); // Simulate network delay
    return [...mockProjects];
  },

  // Get projects by category
  async getProjectsByCategory(category: Project['category']): Promise<Project[]> {
    await delay(300);
    return mockProjects.filter(project => project.category === category);
  },

  // Get single project by ID
  async getProjectById(id: string): Promise<Project | null> {
    await delay(200);
    return mockProjects.find(project => project.id === id) || null;
  },

  // Get featured projects (first 6)
  async getFeaturedProjects(): Promise<Project[]> {
    await delay(400);
    return mockProjects.slice(0, 6);
  }
};

// Default fallback image URL
export const FALLBACK_IMAGE_URL = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop';

// Mock designer profile data
export interface DesignerProfile {
  name: string;
  title: string;
  bio: string;
  experience: string;
  specialties: string[];
  achievements: string[];
}

export const mockDesignerProfile: DesignerProfile = {
  name: 'EDIODIONG',
  title: 'Creative Visual Designer',
  bio: 'Passionate visual designer specializing in creating exceptional logos and eye-catching fliers that help brands communicate their message effectively. With a keen eye for detail and a passion for visual storytelling, I transform ideas into compelling designs that resonate with audiences and drive results.',
  experience: '5+ years',
  specialties: ['Logo Design', 'Flier Design', 'Brand Identity', 'Visual Communication', 'Typography'],
  achievements: [
    'Over 200 successful design projects',
    'Featured in Design Weekly Magazine',
    'Winner of Creative Excellence Award 2023',
    'Collaborated with 50+ brands worldwide'
  ]
};