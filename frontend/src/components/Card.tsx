import React from 'react';

interface CardProps {
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  buttonText: string;
  buttonDisabled?: boolean;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  progress,
  maxProgress,
  buttonText,
  buttonDisabled = false,
  image,
  onClick,
}) => {
  const progressPercentage = (progress / maxProgress) * 100;

  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <span>
          {progress}/{maxProgress}
        </span>
        <button
          className={`btn ${buttonDisabled ? 'btn-gray' : 'btn-green'}`}
          onClick={onClick}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
