import React, { useState } from 'react';
import type { Project } from '../../utils/projectData';
import { getProjectsByCategory } from '../../utils/projectData';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'logos' | 'flyers' | 'banners'>('logos');

  const categories = [
    { key: 'logos' as const, label: 'Logos', count: getProjectsByCategory('logos').length },
    { key: 'flyers' as const, label: 'Flyers', count: getProjectsByCategory('flyers').length },
    { key: 'banners' as const, label: 'Banners', count: getProjectsByCategory('banners').length }
  ];

  const currentProjects = getProjectsByCategory(activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Portfolio</h2>
          <p className={styles.subtitle}>
            Explore my creative work across different design categories
          </p>
        </div>

        <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.categoryTab} ${
                activeCategory === category.key ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
              <span className={styles.count}>({category.count})</span>
            </button>
          ))}
        </div>

        <div className={styles.carouselSection}>
          <ProjectCarousel
            projects={currentProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;