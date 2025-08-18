import { useState } from "react";
import { Eye, Send, Scale, Shield } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function EmailTemplatesSection() {
  const [emailAddress, setEmailAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<'crockett' | 'guard'>('crockett');
  const { toast } = useToast();

  const sendEmailMutation = useMutation({
    mutationFn: async (data: { recipientEmail: string; template: string; subject: string }) => {
      const response = await apiRequest('POST', '/api/send-email', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Email sent successfully!",
        description: "The sample email template has been sent to your inbox.",
      });
      setIsDialogOpen(false);
      setEmailAddress("");
    },
    onError: (error) => {
      toast({
        title: "Failed to send email",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const openEmailModal = (template: 'crockett' | 'guard') => {
    const modal = document.getElementById('email-modal') as HTMLElement;
    const title = document.getElementById('modal-title') as HTMLElement;
    const content = document.getElementById('modal-content') as HTMLElement;
    const donateLink = document.getElementById('donate-link') as HTMLAnchorElement;

    if (template === 'crockett') {
      title.textContent = 'Jasmine Crockett Gerrymandering Action Email';
      donateLink.href = 'https://secure.actblue.com/donate/jc-gads-26?gad_source=1&gad_campaignid=22669709716&gbraid=0AAAAA_7Sgnv9YcCYQqZcAh66LrQwcXfR5&gclid=Cj0KCQjw-4XFBhCBARIsAAdNOkvaYYuDHFnqM2f4XYoA39mDHarP1ShbWO2nZDi93N5a-SbDj_0qnIQaAr_7EALw_wcB';
      donateLink.style.display = 'inline-block';
      
      content.innerHTML = `
        <div class="email-preview bg-white border rounded-lg p-6">
          <div class="border-b pb-4 mb-4">
            <h4 class="font-semibold text-lg">Texas Gerrymandering Crisis - Rep. Crockett Needs Your Support</h4>
            <p class="text-sm text-gray-500">To: Sample Recipient | From: knitex303@gmail.com</p>
          </div>
          <div class="space-y-4">
            <p><strong>Dear [Name],</strong></p>
            <p>Gerrymandering in Texas has reached a breaking point. Our districts are being manipulated to silence minority voices and undermine fair representation.</p>
            <p><strong>Representative Jasmine Crockett (D-TX)</strong> is leading the fight for fair redistricting, but she needs our immediate support to continue this critical work.</p>
            <div class="bg-red-50 p-4 rounded border-l-4 border-red-400">
              <p class="font-semibold text-red-800">The Facts:</p>
              <ul class="list-disc ml-4 text-red-700">
                <li>Texas loses representation through manipulated district lines</li>
                <li>Communities of color are systematically divided</li>
                <li>Fair elections require fair maps</li>
              </ul>
            </div>
            <p><strong>Your action today can help Rep. Crockett fight back against these anti-democratic practices.</strong></p>
            <div class="text-center my-6">
              <a href="${donateLink.href}" class="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block font-semibold text-lg hover:bg-blue-700 transition-colors">
                SUPPORT REP. CROCKETT TODAY →
              </a>
            </div>
            <p>Every dollar helps Rep. Crockett continue her vital work in Congress fighting for fair representation and democratic values.</p>
            <p><strong>Thank you for standing with us,</strong><br>Hassan Wilson<br>Digital Strategist</p>
          </div>
        </div>
      `;
    } else if (template === 'guard') {
      title.textContent = 'National Guard Response Action Email';
      donateLink.style.display = 'none';
      
      content.innerHTML = `
        <div class="email-preview bg-white border rounded-lg p-6">
          <div class="border-b pb-4 mb-4">
            <h4 class="font-semibold text-lg">Urgent: National Guard Deployment Response - Community Safety Alert</h4>
            <p class="text-sm text-gray-500">To: Sample Recipient | From: knitex303@gmail.com</p>
          </div>
          <div class="space-y-4">
            <p><strong>Community Members,</strong></p>
            <p>President Trump's deployment of National Guard troops has escalated tensions nationwide, with significant protest activity emerging across multiple cities.</p>
            <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
              <p class="font-semibold text-yellow-800">Current Situation:</p>
              <ul class="list-disc ml-4 text-yellow-700">
                <li>National Guard units deployed to urban areas</li>
                <li>Peaceful protests organizing in response</li>
                <li>Community safety measures being implemented</li>
              </ul>
            </div>
            <p><strong>Our Response:</strong> We are monitoring the situation closely and coordinating with local organizations to ensure community safety and peaceful expression of democratic rights.</p>
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
              <p class="font-semibold text-blue-800">How You Can Help:</p>
              <ul class="list-disc ml-4 text-blue-700">
                <li>Stay informed through reliable news sources</li>
                <li>Support peaceful demonstration efforts</li>
                <li>Contact your representatives</li>
                <li>Contribute to community safety initiatives</li>
              </ul>
            </div>
            <p><strong>Together, we can navigate this challenging time while protecting our democratic values and community safety.</strong></p>
            <p><strong>Stay safe and stay informed,</strong><br>Hassan Wilson<br>Digital Strategist</p>
          </div>
        </div>
      `;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  const handleSendSample = (template: 'crockett' | 'guard') => {
    setCurrentTemplate(template);
    setIsDialogOpen(true);
  };

  const handleSendEmail = () => {
    if (!emailAddress) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    const subject = currentTemplate === 'crockett' 
      ? 'Texas Gerrymandering Crisis - Rep. Crockett Needs Your Support'
      : 'Urgent: National Guard Deployment Response - Community Safety Alert';

    sendEmailMutation.mutate({
      recipientEmail: emailAddress,
      template: currentTemplate,
      subject: subject
    });
  };

  return (
    <section id="email-templates" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center" data-testid="templates-title">
            Email Template Showcase
          </h2>
          <p className="text-warm-gray text-center mb-12 max-w-3xl mx-auto" data-testid="templates-description">
            Professional email templates designed for political campaigns and advocacy organizations. 
            These templates demonstrate strategic messaging, compelling design, and effective call-to-action placement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Template 1: Jasmine Crockett */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-testid="template-crockett">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  <Scale className="inline mr-2" size={24} />
                  Gerrymandering Action Template
                </h3>
                <p className="text-blue-100">Rep. Jasmine Crockett (D-TX) Call to Action</p>
              </div>
              <div className="p-6">
                <div className="bg-slate-50 p-4 rounded-lg mb-6 max-h-96 overflow-y-auto border">
                  <div className="text-sm">
                    <div className="mb-4 pb-2 border-b">
                      <strong>Subject:</strong> Texas Gerrymandering Crisis - Rep. Crockett Needs Your Support
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Dear [Name],</strong></p>
                      <p>Gerrymandering in Texas has reached a breaking point. Our districts are being manipulated to silence minority voices and undermine fair representation.</p>
                      <p><strong>Representative Jasmine Crockett (D-TX)</strong> is leading the fight for fair redistricting, but she needs our immediate support to continue this critical work.</p>
                      <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                        <p className="font-semibold text-red-800">The Facts:</p>
                        <ul className="list-disc ml-4 text-red-700 text-sm">
                          <li>Texas loses representation through manipulated district lines</li>
                          <li>Communities of color are systematically divided</li>
                          <li>Fair elections require fair maps</li>
                        </ul>
                      </div>
                      <p><strong>Your action today can help Rep. Crockett fight back against these anti-democratic practices.</strong></p>
                      <div className="text-center my-6">
                        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block font-semibold">
                          SUPPORT REP. CROCKETT TODAY →
                        </div>
                      </div>
                      <p className="text-sm">Every dollar helps Rep. Crockett continue her vital work in Congress fighting for fair representation and democratic values.</p>
                      <p className="text-sm"><strong>Thank you for standing with us,</strong><br />Hassan Wilson<br />Digital Strategist</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => openEmailModal('crockett')} 
                    className="flex-1 bg-blue-accent hover:bg-blue-700"
                    data-testid="button-preview-crockett"
                  >
                    <Eye className="mr-2" size={16} />
                    Preview Template
                  </Button>
                  
                  <Dialog open={isDialogOpen && currentTemplate === 'crockett'} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => handleSendSample('crockett')}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        data-testid="button-send-crockett"
                      >
                        <Send className="mr-2" size={16} />
                        Send Sample
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Sample Email</DialogTitle>
                        <DialogDescription>
                          Enter your email address to receive a sample of the Jasmine Crockett gerrymandering action template.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            data-testid="input-email-crockett"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsDialogOpen(false)}
                          data-testid="button-cancel-crockett"
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleSendEmail}
                          disabled={sendEmailMutation.isPending}
                          data-testid="button-confirm-send-crockett"
                        >
                          {sendEmailMutation.isPending ? "Sending..." : "Send Email"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Template 2: National Guard Response */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-testid="template-guard">
              <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  <Shield className="inline mr-2" size={24} />
                  Crisis Response Template
                </h3>
                <p className="text-red-100">National Guard Deployment & Protest Coverage</p>
              </div>
              <div className="p-6">
                <div className="bg-slate-50 p-4 rounded-lg mb-6 max-h-96 overflow-y-auto border">
                  <div className="text-sm">
                    <div className="mb-4 pb-2 border-b">
                      <strong>Subject:</strong> Urgent: National Guard Deployment Response - Community Safety Alert
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Community Members,</strong></p>
                      <p>President Trump's deployment of National Guard troops has escalated tensions nationwide, with significant protest activity emerging across multiple cities.</p>
                      <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                        <p className="font-semibold text-yellow-800">Current Situation:</p>
                        <ul className="list-disc ml-4 text-yellow-700 text-sm">
                          <li>National Guard units deployed to urban areas</li>
                          <li>Peaceful protests organizing in response</li>
                          <li>Community safety measures being implemented</li>
                        </ul>
                      </div>
                      <p><strong>Our Response:</strong> We are monitoring the situation closely and coordinating with local organizations to ensure community safety and peaceful expression of democratic rights.</p>
                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                        <p className="font-semibold text-blue-800">How You Can Help:</p>
                        <ul className="list-disc ml-4 text-blue-700 text-sm">
                          <li>Stay informed through reliable news sources</li>
                          <li>Support peaceful demonstration efforts</li>
                          <li>Contact your representatives</li>
                          <li>Contribute to community safety initiatives</li>
                        </ul>
                      </div>
                      <p><strong>Together, we can navigate this challenging time while protecting our democratic values and community safety.</strong></p>
                      <p className="text-sm"><strong>Stay safe and stay informed,</strong><br />Hassan Wilson<br />Digital Strategist</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => openEmailModal('guard')} 
                    className="flex-1 bg-blue-accent hover:bg-blue-700"
                    data-testid="button-preview-guard"
                  >
                    <Eye className="mr-2" size={16} />
                    Preview Template
                  </Button>
                  
                  <Dialog open={isDialogOpen && currentTemplate === 'guard'} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => handleSendSample('guard')}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        data-testid="button-send-guard"
                      >
                        <Send className="mr-2" size={16} />
                        Send Sample
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Sample Email</DialogTitle>
                        <DialogDescription>
                          Enter your email address to receive a sample of the National Guard response template.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email-guard">Email Address</Label>
                          <Input
                            id="email-guard"
                            type="email"
                            placeholder="your.email@example.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            data-testid="input-email-guard"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsDialogOpen(false)}
                          data-testid="button-cancel-guard"
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleSendEmail}
                          disabled={sendEmailMutation.isPending}
                          data-testid="button-confirm-send-guard"
                        >
                          {sendEmailMutation.isPending ? "Sending..." : "Send Email"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
