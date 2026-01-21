import React, { useRef, useEffect } from 'react';
import type { Project } from '../../utils/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: number;

    const startAutoScroll = () => {
      scrollInterval = window.setInterval(() => {
        if (scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            // Reset to beginning
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll to next card
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (scrollInterval) {
        window.clearInterval(scrollInterval);
      }
    };

    // Start auto-scroll
    startAutoScroll();

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);

    return () => {
      stopAutoScroll();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
        scrollContainer.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        ‹
      </button>
      <div className={styles.carousel} ref={scrollRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default ProjectCarousel;