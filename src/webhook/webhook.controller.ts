// src/webhook/webhook.controller.ts
import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { exec } from 'child_process';

@Controller('webhook')
export class WebhookController {
  @Post()
  handleWebhook(@Res() res: Response) {
    exec('sh /home/deploy/pull.sh', (err, stdout, stderr) => {
      if (err) {
        console.error('❌ Deploy error:', err.message);
        return res.status(500).send('❌ Deploy failed');
      }
      console.log('✅ Deploy success:\n', stdout);
      return res.status(200).send('✅ Deploy success');
    });
  }
}
