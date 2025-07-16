"use client";
import { transform } from 'next/dist/build/swc/generated-native';
import styles from './distraction.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
    FaInstagram, 
    FaTiktok, 
    FaTwitter, 
    FaFacebook, 
    FaSnapchat, 
    FaYoutube,
    FaReddit,
    FaDiscord,
    FaTwitch,
    FaLinkedin,
    FaPinterest,
    FaWhatsapp,
    FaTelegram,
    FaSpotify,
    FaAmazon,
    FaGamepad,
    FaShoppingCart,
    FaPlay,
    FaHeart,
    FaCreditCard,
    FaMusic,
    FaVideo,
    FaNewspaper,
    FaBlog,
    FaComments,
    FaCalendar,
    FaTasks,
    FaFileAlt,
    FaCameraRetro,
    FaPhotoVideo
} from 'react-icons/fa';
import { SiTinder, SiUbereats, SiDoordash, SiCanva, SiVsco, SiNetflix, SiEpicgames, SiSteam, SiPlaystation, SiNintendoswitch, SiApplearcade, SiRoblox, SiPrimevideo, SiBereal, SiClubhouse, SiMastodon, SiTumblr, SiFlipboard, SiMedium, SiQuora, SiZoom, SiSlack, SiGooglemeet, SiTrello, SiNotion, SiAsana, SiClickup, SiAirtable, SiGrubhub, SiInstacart, SiWalmart, SiAliexpress, SiEbay, SiEtsy, SiShopify, SiPaypal, SiVenmo, SiCashapp, SiApplepay, SiShazam, SiDiscogs, SiBadoo } from 'react-icons/si';

export default function Distraction() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const distractingApps = [
        { icon: FaInstagram, name: 'Instagram', color: '#E4405F' },
        { icon: FaTiktok, name: 'TikTok', color: '#000000' },
        { icon: FaTwitter, name: 'Twitter', color: '#1DA1F2' },
        { icon: FaFacebook, name: 'Facebook', color: '#1877F2' },
        { icon: FaSnapchat, name: 'Snapchat', color: '#FFFC00' },
        { icon: FaYoutube, name: 'YouTube', color: '#FF0000' },
        { icon: FaReddit, name: 'Reddit', color: '#FF4500' },
        { icon: FaDiscord, name: 'Discord', color: '#5865F2' },
        { icon: FaTwitch, name: 'Twitch', color: '#9146FF' },
        { icon: FaLinkedin, name: 'LinkedIn', color: '#0A66C2' },
        { icon: FaPinterest, name: 'Pinterest', color: '#E60023' },
        { icon: FaWhatsapp, name: 'WhatsApp', color: '#25D366' },
        { icon: FaTelegram, name: 'Telegram', color: '#0088CC' },
        { icon: FaSpotify, name: 'Spotify', color: '#1DB954' },
        { icon: SiNetflix, name: 'Netflix', color: '#E50914' },
        { icon: FaAmazon, name: 'Amazon', color: '#FF9900' },
        { icon: SiTinder, name: 'Tinder', color: '#FD5068' },
        { icon: FaHeart, name: 'Dating', color: '#FFD700' },
        { icon: SiUbereats, name: 'Uber Eats', color: '#06C167' },
        { icon: SiDoordash, name: 'DoorDash', color: '#FF3008' },
        { icon: SiCanva, name: 'Canva', color: '#00C4CC' },
        { icon: SiVsco, name: 'VSCO', color: '#000000' },
        { icon: FaGamepad, name: 'Mobile Games', color: '#FF6B35' },
        { icon: FaShoppingCart, name: 'Shopping', color: '#4CAF50' },
        { icon: SiSteam, name: 'Steam', color: '#1B2838' },
        { icon: SiEpicgames, name: 'Epic Games', color: '#313131' },
        { icon: SiPlaystation, name: 'PlayStation', color: '#003791' },
        { icon: SiNintendoswitch, name: 'Nintendo', color: '#E60012' },
        { icon: SiApplearcade, name: 'Apple Arcade', color: '#007AFF' },
        { icon: SiRoblox, name: 'Roblox', color: '#00A2FF' },
        { icon: SiPrimevideo, name: 'Prime Video', color: '#00A8E1' },
        { icon: SiBereal, name: 'BeReal', color: '#000000' },
        { icon: SiClubhouse, name: 'Clubhouse', color: '#F1C232' },
        { icon: SiMastodon, name: 'Mastodon', color: '#6364FF' },
        { icon: SiTumblr, name: 'Tumblr', color: '#001935' },
        { icon: SiFlipboard, name: 'Flipboard', color: '#E12828' },
        { icon: SiMedium, name: 'Medium', color: '#000000' },
        { icon: SiQuora, name: 'Quora', color: '#B92B27' },
        { icon: SiZoom, name: 'Zoom', color: '#2D8CFF' },
        { icon: SiSlack, name: 'Slack', color: '#4A154B' },
        { icon: SiGooglemeet, name: 'Google Meet', color: '#00897B' },
        { icon: SiTrello, name: 'Trello', color: '#0079BF' },
        { icon: SiNotion, name: 'Notion', color: '#000000' },
        { icon: SiAsana, name: 'Asana', color: '#273347' },
        { icon: SiClickup, name: 'ClickUp', color: '#7B68EE' },
        { icon: SiAirtable, name: 'Airtable', color: '#18BFFF' },
        { icon: SiGrubhub, name: 'Grubhub', color: '#F63440' },
        { icon: SiInstacart, name: 'Instacart', color: '#43B02A' },
        { icon: SiWalmart, name: 'Walmart', color: '#004C91' },
        { icon: SiAliexpress, name: 'AliExpress', color: '#FF6A00' },
        { icon: SiEbay, name: 'eBay', color: '#E53238' },
        { icon: SiEtsy, name: 'Etsy', color: '#F56500' },
        { icon: SiShopify, name: 'Shopify', color: '#7AB55C' },
        { icon: SiPaypal, name: 'PayPal', color: '#003087' },
        { icon: SiVenmo, name: 'Venmo', color: '#008CFF' },
        { icon: SiCashapp, name: 'Cash App', color: '#00D632' },
        { icon: SiApplepay, name: 'Apple Pay', color: '#000000' },
        { icon: FaCreditCard, name: 'Banking', color: '#1F4E79' },
        { icon: FaMusic, name: 'Music Apps', color: '#FF6B6B' },
        { icon: FaVideo, name: 'Video Apps', color: '#4ECDC4' },
        { icon: FaNewspaper, name: 'News Apps', color: '#45B7D1' },
        { icon: FaBlog, name: 'Blogging', color: '#96CEB4' },
        { icon: FaComments, name: 'Chat Apps', color: '#FFEAA7' },
        { icon: FaCalendar, name: 'Calendar', color: '#DDA0DD' },
        { icon: FaTasks, name: 'To-Do Apps', color: '#98D8C8' },
        { icon: FaCameraRetro, name: 'Photo Apps', color: '#BB8FCE' },
        { icon: FaPhotoVideo, name: 'Photo/Video', color: '#85C1E9' },
        { icon: SiShazam, name: 'Shazam', color: '#0066FF' },
        { icon: SiDiscogs, name: 'Music Discovery', color: '#FF6600' },
        { icon: SiBadoo, name: 'Dating Apps', color: '#FF3154' }
        
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

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.8
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

    const textVariants = {
        hidden: { 
            opacity: 0,
            transform: isMobile ? 'translateX(-50%) translateY(-80px)' : 'translateX(-50%) translateY(-120px)'
        },
        visible: {
            opacity: 1,
            transform: 'translateX(-50%) translateY(0)',
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
                delay: isMobile ? 0.3 : 0.5
            }
        }
    };

    return (
        <motion.div 
            ref={containerRef}
            className={styles.distractionContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div 
                className={styles.appsGrid}
                variants={containerVariants}
            >
                {distractingApps.map((app, index) => {
                    const IconComponent = app.icon;
                    return (
                        <motion.div 
                            key={index} 
                            className={styles.appIcon}
                            style={{ '--app-color': app.color } as React.CSSProperties}
                            variants={itemVariants}
                        >
                            <div className={styles.iconWrapper}>
                                <IconComponent className={styles.icon} />
                            </div>
                            <span className={styles.appName}>{app.name}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
            <motion.div 
                className={styles.textContainer}
                variants={textVariants}
            >
                <h2>
                    Distraction Blocking
                </h2>
                <p>
                    Identify and block distracting apps to enhance your productivity.
                </p>
            </motion.div>
            <motion.div 
                className={styles.coverImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                    delay: 0.8, 
                    duration: 0.6,
                    type: "spring" as const,
                    damping: 20
                }}
            >
            </motion.div>
        </motion.div>
    );
}