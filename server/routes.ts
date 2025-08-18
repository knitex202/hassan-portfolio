import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailRequestSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Email sending endpoint
  app.post("/api/send-email", async (req, res) => {
    try {
      const { recipientEmail, template } = insertEmailRequestSchema.parse(req.body);
      
      let subject: string;
      let htmlContent: string;
      let donateUrl: string = "";

      if (template === "crockett") {
        subject = "Texas Gerrymandering Crisis - Rep. Crockett Needs Your Support";
        donateUrl = "https://secure.actblue.com/donate/jc-gads-26?gad_source=1&gad_campaignid=22669709716&gbraid=0AAAAA_7Sgnv9YcCYQqZcAh66LrQwcXfR5&gclid=Cj0KCQjw-4XFBhCBARIsAAdNOkvaYYuDHFnqM2f4XYoA39mDHarP1ShbWO2nZDi93N5a-SbDj_0qnIQaAr_7EALw_wcB";
        
        htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; }
              .header { background: linear-gradient(135deg, #5fb3b3, #4a9999); color: white; padding: 30px; text-align: center; }
              .logo { max-width: 300px; height: auto; margin-bottom: 20px; }
              .content { padding: 30px; }
              .alert-box { background: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; margin: 20px 0; }
              .alert-title { font-weight: bold; color: #dc2626; margin-bottom: 10px; }
              .cta-button { display: inline-block; background: #5fb3b3; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; }
              ul { margin: 10px 0; padding-left: 20px; }
              li { margin: 5px 0; color: #dc2626; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://7a958f18-e3a0-49a6-9b0b-2cd644c12f60-00-2fkv1nnndsehh.riker.replit.dev/api/crockett-logo" alt="Jasmine Crockett - Democrat for US Congress" class="logo" />
                <h1>Texas Gerrymandering Crisis</h1>
                <p>Rep. Jasmine Crockett Needs Your Support</p>
              </div>
              <div class="content">
                <p><strong>Dear Friend,</strong></p>
                <p>Gerrymandering in Texas has reached a breaking point. Our districts are being manipulated to silence minority voices and undermine fair representation.</p>
                <p><strong>Representative Jasmine Crockett (D-TX)</strong> is leading the fight for fair redistricting, but she needs our immediate support to continue this critical work.</p>
                
                <div class="alert-box">
                  <div class="alert-title">The Facts:</div>
                  <ul>
                    <li>Texas loses representation through manipulated district lines</li>
                    <li>Communities of color are systematically divided</li>
                    <li>Fair elections require fair maps</li>
                  </ul>
                </div>
                
                <p><strong>Your action today can help Rep. Crockett fight back against these anti-democratic practices.</strong></p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${donateUrl}" class="cta-button">SUPPORT REP. CROCKETT TODAY →</a>
                </div>
                
                <p>Every dollar helps Rep. Crockett continue her vital work in Congress fighting for fair representation and democratic values.</p>
                
                <p><strong>Thank you for standing with us,</strong><br>
                Hassan Wilson<br>
                Digital Strategist</p>
              </div>
              <div class="footer">
                <p>This email was sent by Hassan Wilson - Digital Content Strategist</p>
                <p>Contact: knitex303@gmail.com | (737) 314-7528</p>
              </div>
            </div>
          </body>
          </html>
        `;
      } else if (template === "guard") {
        subject = "Urgent: National Guard Deployment Response - Community Safety Alert";
        
        htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; }
              .header { background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 30px; text-align: center; }
              .content { padding: 30px; }
              .warning-box { background: #fefce8; border-left: 4px solid #eab308; padding: 20px; margin: 20px 0; }
              .info-box { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; }
              .box-title { font-weight: bold; margin-bottom: 10px; }
              .warning-title { color: #ca8a04; }
              .info-title { color: #1d4ed8; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; }
              ul { margin: 10px 0; padding-left: 20px; }
              .warning-box li { color: #ca8a04; }
              .info-box li { color: #1d4ed8; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Community Safety Alert</h1>
                <p>National Guard Deployment Response</p>
              </div>
              <div class="content">
                <p><strong>Community Members,</strong></p>
                <p>President Trump's deployment of National Guard troops has escalated tensions nationwide, with significant protest activity emerging across multiple cities.</p>
                
                <div class="warning-box">
                  <div class="box-title warning-title">Current Situation:</div>
                  <ul>
                    <li>National Guard units deployed to urban areas</li>
                    <li>Peaceful protests organizing in response</li>
                    <li>Community safety measures being implemented</li>
                  </ul>
                </div>
                
                <p><strong>Our Response:</strong> We are monitoring the situation closely and coordinating with local organizations to ensure community safety and peaceful expression of democratic rights.</p>
                
                <div class="info-box">
                  <div class="box-title info-title">How You Can Help:</div>
                  <ul>
                    <li>Stay informed through reliable news sources</li>
                    <li>Support peaceful demonstration efforts</li>
                    <li>Contact your representatives</li>
                    <li>Contribute to community safety initiatives</li>
                  </ul>
                </div>
                
                <p><strong>Together, we can navigate this challenging time while protecting our democratic values and community safety.</strong></p>
                
                <p><strong>Stay safe and stay informed,</strong><br>
                Hassan Wilson<br>
                Digital Strategist</p>
              </div>
              <div class="footer">
                <p>This email was sent by Hassan Wilson - Digital Content Strategist</p>
                <p>Contact: knitex303@gmail.com | (737) 314-7528</p>
              </div>
            </div>
          </body>
          </html>
        `;
      } else {
        return res.status(400).json({ message: "Invalid template specified" });
      }

      // Send email using the email service
      const transporter = createTransporter();
      
      await transporter.sendMail({
        from: process.env.GMAIL_USER || "knitex303@gmail.com",
        to: recipientEmail,
        subject: subject,
        html: htmlContent,
      });

      // Store the email request
      const emailRequest = await storage.createEmailRequest({
        recipientEmail,
        template,
        subject
      });

      res.json({ 
        message: "Email sent successfully",
        emailRequest: emailRequest,
        donateUrl: donateUrl || null
      });

    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ 
        message: "Failed to send email", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Get email history
  app.get("/api/email-requests", async (req, res) => {
    try {
      const emailRequests = await storage.getEmailRequests();
      res.json(emailRequests);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve email requests" });
    }
  });

  // Download resume endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "HASSAN WILSON resume 2025 (1)_1755478324607.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Hassan_Wilson_Resume_2025.pdf");
    } else {
      res.status(404).json({ message: "Resume file not found" });
    }
  });

  // Serve Jasmine Crockett logo
  app.get("/api/crockett-logo", (req, res) => {
    const logoPath = path.join(process.cwd(), "attached_assets", "387c5228-bc91-4147-8e5d-35ae7b22decf-IMG_9198_1755480747133.jpg");
    
    if (fs.existsSync(logoPath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      res.sendFile(logoPath);
    } else {
      res.status(404).json({ message: "Logo file not found" });
    }
  });

  // Serve Kamala rally image
  app.get("/api/kamala-rally-image", (req, res) => {
    const imagePath = path.join(process.cwd(), "attached_assets", "DSC04567_1755482571187.JPG");
    
    if (fs.existsSync(imagePath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      res.sendFile(imagePath);
    } else {
      res.status(404).json({ message: "Rally image not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Email service configuration
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || "knitex303@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSWORD || "your-app-password"
    }
  });
}
