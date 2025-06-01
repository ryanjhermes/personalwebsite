import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 50, // Number of requests
  duration: 3600, // Per hour (in seconds)
});

export async function checkRateLimit(userId: string) {
  try {
    await rateLimiter.consume(userId);
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      message: 'Rate limit exceeded. Please try again later.' 
    };
  }
} 