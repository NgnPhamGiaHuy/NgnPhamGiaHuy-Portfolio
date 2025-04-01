export interface User {
    id: number;
    bio: string;
    full_name: string;
    avatar_url: string | null;
    created_at: string;
    updated_at: string;
}

export interface Contact {
    id: number;
    user_id: number;
    email: string;
    phone: string | null;
    location: string | null;
    website: string | null;
    created_at: string;
    updated_at: string;
}

export interface SocialProfile {
    id: number;
    user_id: number;
    platform: string;
    url: string;
    created_at: string;
    updated_at: string;
}

export interface Portfolio {
    id: number;
    user_id: number;
    title: string;
    category: string;
    description: string | null;
    image_url: string | null;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: number;
    user_id: number;
    title: string;
    description: string | null;
    price_range: string | null;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: number;
    user_id: number;
    name: string;
    category: string | null;
    proficiency_level: number | null;
    created_at: string;
    updated_at: string;
}

export interface Education {
    id: number;
    user_id: number;
    school_name: string;
    school_url: string | null;
    degree_title: string;
    field_of_study: string | null;
    start_date: string;
    end_date: string | null;
    achievements: string | null;
    created_at: string;
    updated_at: string;
}

export interface Project {
    id: number;
    user_id: number;
    title: string;
    description: string | null;
    project_url: string | null;
    github_url: string | null;
    technologies: string | null;
    start_date: string | null;
    end_date: string | null;
    status: "completed" | "in_progress" | "planned" | null;
    created_at: string;
    updated_at: string;
}

export interface Experience {
    id: number;
    user_id: number;
    company_name: string;
    company_url: string | null;
    position_title: string;
    start_date: string;
    end_date: string | null;
    location: string | null;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export interface Certificate {
    id: number;
    user_id: number;
    name: string;
    issuing_organization: string;
    issue_date: string;
    expiry_date: string | null;
    certificate_url: string | null;
    certificate_id: string | null;
    created_at: string;
    updated_at: string;
}

export interface FAQ {
    id: number;
    user_id: number;
    question: string;
    answer: string;
    category: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type ApiResponse<T> = {
    data?: T;
    success?: boolean;
    error?: string | Record<string, any>;
};
