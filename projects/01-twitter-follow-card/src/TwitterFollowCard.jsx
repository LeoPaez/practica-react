import { useState } from "react"
import "./App.css"

const TwitterFollowCard = ({ userName = "unknown", name = "unknown", initialIsFollowing, isVerified }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const text = isFollowing ? "Following" : "Follow"
  const buttonClassName = isFollowing ? "follow-card__button is-following" : "follow-card__button"
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="follow-card">
      <header className="follow-card__info">
        <img
          className={`follow-card__img ${isVerified ? "verified" : ""}`}
          src={`https://unavatar.io/${userName}`}
          alt={`imagen de ${userName}`}
        />
        <div>
          <strong className="follow-card__name">{name}</strong>
          <span className="follow-card__user">@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          onClick={handleClick}
          className={buttonClassName}
        >
          <span className="follow-card__button-text">{text}</span>
          <span className="follow-card__button--unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard