export interface EmailModel {
  id: number;
  recipients: string[];
  subject: string;
  message: string;
}
