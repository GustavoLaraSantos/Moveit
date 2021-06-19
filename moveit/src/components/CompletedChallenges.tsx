import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContexts'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.challengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}