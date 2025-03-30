export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IUserXGroup {
    user_id: number;
    users: IUser;
}

export interface IGroup {
    id: number;
    name: string;
    admin_id: number;
    created_at: string;
    deleted_at: string | null;
    updated_at: string | null;
    is_personal_space: boolean;
    usersXgroups: IUserXGroup[];
}

export interface IGroupData {
    groups: IGroup;
}
