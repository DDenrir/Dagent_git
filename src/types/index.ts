
// User & Authentication
export type UserRole = 'admin' | 'researcher' | 'user';

export interface User {
    id: string;
    username: string;
    email: string;
    role: UserRole;
    fullName: string;
    position?: string;
    faculty?: string;
    avatarUrl?: string;
    createdAt: string;
}

// Projects
export type ProjectStatus = 'planned' | 'ongoing' | 'completed';

export interface Project {
    id: string;
    title: string;
    description?: string;
    budgetTotal: number;
    budgetDisbursed: number;
    budgetRemaining: number;
    status: ProjectStatus;
    fiscalYear: number; // e.g., 2569
    category: string;
    researcherId: string; // Foreign Key to User
    createdAt: string;
    updatedAt: string;
}

// Publications
export interface Publication {
    id: string;
    title: string;
    journalName: string;
    publishDate: string;
    link?: string;
    researcherId: string; // Foreign Key to User
    type: 'journal' | 'conference' | 'book';
}

// Intellectual Property
export type IPType = 'patent' | 'petty_patent' | 'copyright' | 'trademark';

export interface IntellectualProperty {
    id: string;
    name: string;
    type: IPType;
    registrationNo: string;
    ownerName: string;
    registrationDate?: string;
}

// News & Activities
export interface NewsItem {
    id: string;
    title: string;
    excerpt?: string;
    content: string;
    coverImage?: string;
    publishedDate: string;
    isFeatured: boolean;
    authorId?: string;
}

// Common Response Type for API
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    meta?: {
        page: number;
        limit: number;
        total: number;
    };
}
