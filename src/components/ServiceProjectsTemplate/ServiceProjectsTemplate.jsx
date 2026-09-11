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

    /*
        Categories
        من ملف JSON
    */
    const categories = Array.isArray(serviceData.categories)
        ? serviceData.categories
        : [];

    /*
        Projects
        من ملف JS
    */
    const projects = Array.isArray(projectsData)
        ? projectsData
        : [];

    /*
        النصوص
        من ملف JSON
    */
    const projectTexts =
        serviceData.projects &&
        typeof serviceData.projects === "object" &&
        !Array.isArray(serviceData.projects)
            ? serviceData.projects
            : {};

    /*
        دمج بيانات المشروع

        من JS:
        - id
        - category
        - image

        من JSON:
        - title
        - description
    */
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

    const categoryExists =
        activeCategory === "all" ||
        categories.some(
            (category) =>
                category.key === activeCategory
        );

    const currentCategory = categoryExists
        ? activeCategory
        : "all";

    /*
        Filter
    */
    const filteredProjects =
        currentCategory === "all"
            ? mergedProjects
            : mergedProjects.filter(
                    (project) =>
                        project.category === currentCategory
                );

    return (
        <section className="al3-projects-section">

            <div className="al3-projects-container">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="al3-projects-header">

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

                    <span className="al3-projects-line"></span>

                    <p className="al3-projects-subtitle">
                        {t(
                            "services.sectionHeader.subtitle",
                            "Real projects executed by our team — design, development, and measurable results."
                        )}
                    </p>

                </div>


                {/* =========================
                    FILTER
                ========================= */}

                {categories.length > 0 && (
                    <div className="al3-projects-categories">

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
                                    setActiveCategory(category.key)
                                }
                            >
                                {category.label}
                            </button>
                        ))}

                    </div>
                )}


                {/* =========================
                    PROJECTS GRID
                ========================= */}

                <div className="al3-projects-grid">

                    {filteredProjects.length > 0 ? (

                        filteredProjects.map((project) => (

                            <article
                                key={project.id}
                                className={`al3-project-card ${
                                    variant === "graphic-design"
                                        ? "al3-project-card-design"
                                        : variant === "video-production"
                                        ? "al3-project-card-video"
                                        : ""
                                }`}
                            >
                                {project.image && (
                                    <div className="al3-project-image">

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
                                                alt={project.title || ""}
                                                loading="lazy"
                                            />
                                        )}

                                    </div>
                                )}

                                <div className="al3-project-content">

                                    <h3 className="al3-project-title">
                                        {project.title}
                                    </h3>

                                    <p className="al3-project-description">
                                        {project.description}
                                    </p>

                                </div>
                            </article>
                        ))

                    ) : (

                        <div className="al3-projects-empty">

                            <i className="fa-solid fa-folder-open"></i>

                            <p>
                                {t(
                                    "services.projects.empty",
                                    "No projects available."
                                )}
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </section>
    );
};

export default ServiceProjectsTemplate;