import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/JohntZart.png" alt="Gustavo" />
            <div>
                <strong>Gustavo Santos</strong>
                <p>
                <img src="icons/level.svg" alt="levelicon" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}