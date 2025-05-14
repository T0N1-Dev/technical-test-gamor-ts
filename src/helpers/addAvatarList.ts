import type { Team, Member } from '../data/teamsGroups';

export const addAvatarList = (
    id: string,
    newMember: Member,
    list: Team[]
): Team[] => {
    return list.map(team => {
        if (team.id === id) {
            return {
                ...team,
                members: [...team.members, newMember]
            };
        }
        return team;
    });
};