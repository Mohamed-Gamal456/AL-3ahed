import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ServiceProjectsTemplate.css";

const ServiceProjectsTemplate = ({
    serviceData,
    projectsData = [],
    variant = "default",
}) => {
    const { t } = useTranslation();

    const [activeCategory, setActiveCategory] = useState("all");

    if (!serviceData) {
        return null;
    }

    /* ==========================================
       CATEGORIES
    ========================================== */

    const categories = Array.isArray(serviceData.categories)
        ? serviceData.categories
        : [];

    /* ==========================================
       PROJECTS
    ========================================== */

    const projects = Array.isArray(projectsData)
        ? projectsData
        : [];

    /* ==========================================
       PROJECT TEXTS
       FROM JSON
    ========================================== */

    const projectTexts =
        serviceData.projects &&
        typeof serviceData.projects === "object" &&
        !Array.isArray(serviceData.projects)
            ? serviceData.projects
            : {};

    /* ==========================================
       MERGE PROJECT DATA
    ========================================== */

    const mergedProjects = projects
        .map((project) => {
            const textData =
                projectTexts[String(project.id)] || {};

            return {
                id: project.id,
                category: project.category,
                image: project.image,
                title: textData.title || "",
                description: textData.description || "",
            };
        })
        .filter(
            (project) =>
                project.title || project.description
        );

    /* ==========================================
       CURRENT CATEGORY
    ========================================== */

    const categoryExists =
        activeCategory === "all" ||
        categories.some(
            (category) =>
                category.key === activeCategory
        );

    const currentCategory = categoryExists
        ? activeCategory
        : "all";

    /* ==========================================
       FILTER PROJECTS
    ========================================== */

    const filteredProjects =
        currentCategory === "all"
            ? mergedProjects
            : mergedProjects.filter(
                (project) =>
                    project.category === currentCategory
            );

    /* ==========================================
       CARD CLASS
    ========================================== */

    const getCardClass = () => {
        if (variant === "graphic-design") {
            return "al3-project-card al3-project-card--design";
        }

        if (variant === "video-production") {
            return "al3-project-card al3-project-card--video";
        }

        return "al3-project-card";
    };

    return (
        <section className="al3-projects-section">

            <div className="container al3-projects-container">

                {/* ==========================================
                    HEADER
                ========================================== */}

                <header className="al3-projects-header">

                    <span className="al3-projects-badge">
                        {t(
                            "services.sectionHeader.badge"
                        )}
                    </span>

                    <h2 className="al3-projects-title">
                        {t(
                            "services.sectionHeader.title",
                            "Examples of Our Work"
                        )}
                    </h2>

                    <span
                        className="al3-projects-line"
                        aria-hidden="true"
                    />

                    <p className="al3-projects-subtitle">
                        {t(
                            "services.sectionHeader.subtitle",
                            "Real projects executed by our team — design, development, and measurable results."
                        )}
                    </p>

                </header>


                {/* ==========================================
                    FILTER
                ========================================== */}

                {categories.length > 0 && (
                    <div className="al3-projects-filters">

                        <div className="d-flex flex-wrap justify-content-center gap-2">

                            {categories.map((category) => (
                                <button
                                    key={category.key}
                                    type="button"
                                    className={`al3-projects-category ${
                                        currentCategory === category.key
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveCategory(
                                            category.key
                                        )
                                    }
                                >
                                    {category.label}
                                </button>
                            ))}

                        </div>

                    </div>
                )}


                {/* ==========================================
                    PROJECTS GRID
                ========================================== */}

                <div className="row g-4 justify-content-center">

                    {filteredProjects.length > 0 ? (

                        filteredProjects.map((project) => (

                            <div
                                key={project.id}
                                className="col-12 col-md-6 col-lg-4"
                            >

                                <article
                                    className={getCardClass()}
                                >

                                    {/* ==========================================
                                        PROJECT MEDIA
                                    ========================================== */}

                                    {project.image && (
                                        <div className="al3-project-media">

                                            {variant === "video-production" ? (

                                                <video
                                                    src={project.image}
                                                    controls
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                />

                                            ) : (

                                                <img
                                                    src={project.image}
                                                    alt={
                                                        project.title ||
                                                        "Project"
                                                    }
                                                    loading="lazy"
                                                />

                                            )}

                                        </div>
                                    )}


                                    {/* ==========================================
                                        PROJECT CONTENT
                                    ========================================== */}

                                    <div className="al3-project-content">

                                        {project.title && (
                                            <h3 className="al3-project-title">
                                                {project.title}
                                            </h3>
                                        )}

                                        {project.description && (
                                            <p className="al3-project-description">
                                                {project.description}
                                            </p>
                                        )}

                                    </div>

                                </article>

                            </div>

                        ))

                    ) : (

                        <div className="col-12">

                            <div className="al3-projects-empty">

                                <i className="fa-solid fa-folder-open"></i>

                                <p>
                                    {t(
                                        "services.projects.empty",
                                        "No projects available."
                                    )}
                                </p>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </section>
    );
};

export default ServiceProjectsTemplate;