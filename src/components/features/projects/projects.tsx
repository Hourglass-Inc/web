"use client";
import styles from './projects.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
    FaCheckCircle, 
    FaUsers, 
    FaDollarSign, 
    FaTasks, 
    FaUser,
    FaPlus,
    FaCalendarAlt,
    FaFlag,
    FaClock,
    FaProjectDiagram
} from 'react-icons/fa';
import { MdAssignment, MdGroup, MdAccountBalanceWallet } from 'react-icons/md';

export default function Projects() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const personalTasks = [
        { id: 1, text: "Review morning emails", completed: true, priority: "medium" },
        { id: 2, text: "Finish project proposal", completed: false, priority: "high" },
        { id: 3, text: "Call client about requirements", completed: false, priority: "high" },
        { id: 4, text: "Update portfolio website", completed: true, priority: "low" },
        { id: 5, text: "Plan weekend activities", completed: false, priority: "low" }
    ];

    const projectFeatures = [
        { icon: MdAssignment, text: "Detailed project descriptions", color: "#8B5CF6" },
        { icon: MdGroup, text: "Team collaboration", color: "#06B6D4" },
        { icon: MdAccountBalanceWallet, text: "Budget & expense tracking", color: "#10B981" },
        { icon: FaTasks, text: "Task breakdown & assignment", color: "#F59E0B" },
    ];

    const teamMembers = [
        { name: "Alex", avatar: "A", role: "Designer", color: "#7c3aedb9" },
        { name: "Sam", avatar: "S", role: "Developer", color: "#be185d94" },
        { name: "Jordan", avatar: "J", role: "Manager", color: "#1e40af8f" }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100
            }
        }
    };

    const taskVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 120
            }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 150
            }
        }
    };

    return (
        <motion.div 
            ref={containerRef}
            className={styles.projectsContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Personal Task Management Section */}
            <motion.div className={styles.personalSection} variants={cardVariants}>
                <div className={styles.sectionHeader}>
                    <FaCheckCircle className={styles.sectionIcon} />
                    <h3>Personal Task Management</h3>
                </div>
                <p className={styles.sectionDescription}>
                    Stay organized with your own personal to-do list. Create, edit, and prioritize tasks to structure your day.
                </p>
                
                <div className={styles.taskList}>
                    {personalTasks.map((task, index) => (
                        <motion.div 
                            key={task.id}
                            className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
                            variants={taskVariants}
                            custom={index}
                        >
                            <div className={styles.taskCheck}>
                                <FaCheckCircle className={task.completed ? styles.checkedIcon : styles.uncheckedIcon} />
                            </div>
                            <span className={styles.taskText}>{task.text}</span>
                            <div className={`${styles.priorityBadge} ${styles[task.priority]}`}>
                                {task.priority}
                            </div>
                        </motion.div>
                    ))}
                    
                    <motion.div className={styles.addTask} variants={taskVariants}>
                        <FaPlus className={styles.addIcon} />
                        <span>Add new task</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Project Management Section */}
            <motion.div className={styles.projectSection} variants={cardVariants}>
                <div className={styles.sectionHeader}>
                    <FaProjectDiagram className={styles.sectionIcon} />
                    <h3>Project Management</h3>
                </div>
                <p className={styles.sectionDescription}>
                    Manage bigger goals through structured projects. Perfect for teams and complex work.
                </p>

                {/* Project Card Preview */}
                <motion.div className={styles.projectCard} variants={cardVariants}>
                    <div className={styles.projectHeader}>
                        <h4>Website</h4>
                        <div className={styles.projectStatus}>In Progress</div>
                    </div>
                    <div className={styles.projectMeta}>
                        <div className={styles.metaItem}>
                            <FaCalendarAlt />
                            <span>Due: Dec 15</span>
                        </div>
                        <div className={styles.metaItem}>
                            <FaDollarSign />
                            <span>$5,200 / $8,000</span>
                        </div>
                    </div>

                    <div className={styles.teamAvatars}>
                        {teamMembers.map((member, index) => (
                            <motion.div 
                                key={member.name}
                                style={{ backgroundColor: member.color }}
                                className={styles.avatar}
                                variants={featureVariants}
                                custom={index}
                                title={`${member.name} - ${member.role}`}
                            >
                                {member.avatar}
                            </motion.div>
                        ))}
                        <motion.div className={styles.addMember} variants={featureVariants}>
                            <FaPlus />
                        </motion.div>
                    </div>

                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '65%' }}></div>
                    </div>
                    <span className={styles.progressText}>65% Complete</span>
                </motion.div>

                {/* Features Grid */}
                <motion.div className={styles.featuresGrid} variants={containerVariants}>
                    {projectFeatures.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className={styles.featureItem}
                            variants={featureVariants}
                            custom={index}
                        >
                            <feature.icon 
                                className={styles.featureIcon} 
                                style={{ color: feature.color }} 
                            />
                            <span>{feature.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
