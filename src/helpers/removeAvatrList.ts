import type { Team, Member } from '../data/teamsGroups';

export const removeAvatarList = (
    id: string, 
    user: Member, 
    list: Team[]
): Team[] => {
    return list.map(team => {
        if (team.id === id) {
            return {
                ...team,
                members: team.members.filter(
                    avatar => avatar.id !== user.id
                )
            };
        }
        return team;
    });
};