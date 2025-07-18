import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    const email = this.configService.get<string>('GMAIL_USER');
    const pass = this.configService.get<string>('GMAIL_PASS');
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: pass,
      },
    });
  }

  async sendOtp(email: string, otp: string) {
    const mailOptions = {
      from: `"Arena" <${email}>`,
      to: email,
      subject: 'Tasdiqlash kodi',
      text: `Sizning OTP kodingiz: ${otp}`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`OTP yuborildi: ${otp}, Email ID: ${info.messageId}`);
    } catch (error) {
      this.logger.error(`Email yuborishda xatolik: ${error.message}`);
      throw error;
    }
  }
}