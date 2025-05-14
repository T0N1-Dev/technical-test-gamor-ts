import { useAuth } from "../../../context/AuthContext";
import { useModal } from "../../../context/ModalContext";
import { teamsGroups } from "../../../data/teamsGroups";
import { addAvatarList } from "../../../helpers/addAvatarList";
import { removeAvatarList } from "../../../helpers/removeAvatrList";
import { StepPlatforms } from "./StepPlatforms";
import { useState } from "react";
import "../../../styles/Main/RightBoard/RightBoard.css";


export const RightBoard = () => {

    const { user, isAuthenticated } = useAuth();
    const { openModal } = useModal();
    if (!user) return null;
    const { id, backgroundColor, imageUrl } = user || {};
    const [ joinedTeamId, setJoinedTeamId ] = useState<string | null>(null);


    const [teams, setTeams] = useState(teamsGroups);

    const handleToggle = (teamId: string) => {

        if (joinedTeamId === teamId) {
            // User go out
            const updatedTeams = removeAvatarList(teamId, { id, backgroundColor, imageUrl }, teams);
            setTeams(updatedTeams);
            setJoinedTeamId(null);
        } else {
            // Usuar into in
            const updatedTeams = addAvatarList(teamId, { id, backgroundColor, imageUrl }, teams);
            setTeams(updatedTeams);
            setJoinedTeamId(teamId);
        }
    };

    return (
        <div className="selection-panel">
            <div className="selection-content">
                <StepPlatforms />

                <div className="step">
                    <span className="step-number">02.</span>
                    <h3 className="step-title">Searching Game</h3>

                    <div className="game-search">
                        <div className="game-header">
                            <span className="game-name">COD Warzone</span>
                            <span className="game-settings">⋮⋮</span>
                        </div>

                        <div className="teams-list">
                            {teams.map(({ id, name, members}) => (
                                <div key={id} className="team-item">
                                    <span className="team-number">{id}</span>
                                    <span className="team-name">{name}</span>
                                    <div className="team-avatars">
                                        {members.map((avatar, index) => (
                                            <div
                                                key={index}
                                                className="team-avatar"
                                                style={{ backgroundColor: avatar.backgroundColor }}
                                            >
                                                <img src={`${avatar.imageUrl}`} alt={`avatar-${index}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        className={`add-btn ${joinedTeamId !== null && joinedTeamId !== id && 'btn-blocked'}`} 
                                        disabled={joinedTeamId !== null && joinedTeamId !== id}
                                        onClick={() => 
                                            isAuthenticated ? handleToggle(id) : openModal() 
                                        }
                                    >
                                        {joinedTeamId === id ? '-' : '+'}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button className="search-btn">Search Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
