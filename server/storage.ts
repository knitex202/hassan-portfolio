import { type User, type InsertUser, type EmailRequest, type InsertEmailRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEmailRequest(emailRequest: InsertEmailRequest): Promise<EmailRequest>;
  getEmailRequests(): Promise<EmailRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private emailRequests: Map<string, EmailRequest>;

  constructor() {
    this.users = new Map();
    this.emailRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmailRequest(insertEmailRequest: InsertEmailRequest): Promise<EmailRequest> {
    const id = randomUUID();
    const emailRequest: EmailRequest = { 
      ...insertEmailRequest, 
      id,
      sentAt: new Date()
    };
    this.emailRequests.set(id, emailRequest);
    return emailRequest;
  }

  async getEmailRequests(): Promise<EmailRequest[]> {
    return Array.from(this.emailRequests.values());
  }
}

export const storage = new MemStorage();
