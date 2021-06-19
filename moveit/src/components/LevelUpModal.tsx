import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContexts'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você subiu de level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}