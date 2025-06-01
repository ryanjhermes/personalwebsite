import { checkRateLimit } from '@/utils/rateLimiter';

export default async function handler(req, res) {
  const userId = req.session.userId; // Get user ID from session/auth

  // Check rate limit before processing
  const rateLimitCheck = await checkRateLimit(userId);
  
  if (!rateLimitCheck.success) {
    return res.status(429).json({ error: rateLimitCheck.message });
  }

  // Proceed with OpenAI API call
  try {
    // Your OpenAI API logic here
  } catch (error) {
    // Error handling
  }
} 