import React from 'react';
import type { Project } from '../../utils/projectData';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <img src={project.imageUrl} alt={project.title} />
          </div>
          <div className={styles.contentContainer}>
            <span className={styles.category}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;