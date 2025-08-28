export interface BlogPost {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  type: 'poem' | 'article';
  imageUrl: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: {
      en: "HSCian",
      bn: "HSCian"
    },
    content: {
      en: `HSCian is a completely non-profit educational platform dedicated to supporting HSC (Higher Secondary Certificate) students in Bangladesh by offering free, high-quality resources including all-in-one study materials, subject- and chapter-wise preparation, Smart Shot tips, and built-in HTML and C compilers—empowering every student to excel academically regardless of their financial background. Link- https://hsian.netlify.app`,
      bn: `HSCian একটি সম্পূর্ণ অলাভজনক শিক্ষা প্ল্যাটফর্ম, যা বাংলাদেশের এইচএসসি শিক্ষার্থীদের জন্য তৈরি, যেখানে এক জায়গায় সব বিষয়ভিত্তিক ও অধ্যায়ভিত্তিক প্রস্তুতি, স্মার্ট শট টিপস এবং HTML ও C প্রোগ্রাম কম্পাইলারসহ মানসম্মত শিক্ষাসামগ্রী বিনামূল্যে প্রদান করে, যেন যেকোনো শিক্ষার্থী আর্থিক অবস্থা নির্বিশেষে ভালো ফলাফল অর্জন করতে পারে। Link- https://hsian.netlify.app `
    },
    date: "2024-01-10",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো রিদওয়ান মাহমুদ জিসান"
    },
    type: "Development",
    imageUrl: "https://i.postimg.cc/zDQ8gh3Z/Sleep-paralyse-20250727-013506-0000.png"
  },
  {
    id: "2", 
    title: {
      en: "Divine Love",
      bn: "ঐশী প্রেম"
    },
    content: {
      en: `In every breath, I feel Your grace,
In every heartbeat, Your embrace,
O Lord of all that is and was,
You are my light, You are my cause.

Through valleys dark and mountains high,
Beneath the vast and starry sky,
Your love remains my guiding star,
No matter where, no matter far.

In silence deep, in prayer profound,
In Your mercy, I am found,
Forever bound by love divine,
Forever Yours, forever mine.`,
      bn: `প্রতিটি শ্বাসে, অনুভব করি তোমার করুণা,
প্রতিটি হৃদস্পন্দনে, তোমার আলিঙ্গন,
হে সকল কিছুর মালিক যা আছে এবং ছিল,
তুমি আমার আলো, তুমি আমার উদ্দেশ্য।

অন্ধকার উপত্যকা আর উঁচু পাহাড়ের মধ্য দিয়ে,
বিস্তৃত ও তারকাখচিত আকাশের নিচে,
তোমার ভালোবাসা থেকে যায় আমার পথপ্রদর্শক তারা,
যেখানেই থাকি, যত দূরেই থাকি।

গভীর নীরবতায়, গভীর প্রার্থনায়,
তোমার দয়ায়, আমি খুঁজে পাই নিজেকে,
চিরকাল বাঁধা ঐশী প্রেমে,
চিরকাল তোমার, চিরকাল আমার।`
    },
    date: "2024-02-14",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো রিদওয়ান মাহমুদ জিসান"
    },
    type: "poem",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop"
  },
  {
    id: "3",
    title: {
      en: "Ramadan Nights",
      bn: "রমজানের রাত"
    },
    content: {
      en: `The crescent moon adorns the sky,
A blessed month has drawing nigh,
The gates of mercy open wide,
With fasting souls by His side.

In Tarawih prayers we stand as one,
Until the blessed month is done,
Each verse recited, each breath a prayer,
In Allah's presence, beyond compare.

The nights of power, Laylatul Qadr,
When angels descend from realms afar,
O seeker, purify your heart,
From worldly chains, now depart.`,
      bn: `অর্ধচন্দ্র সাজায় আকাশ,
এক বরকতময় মাস এসেছে কাছে,
দয়ার দরজা খুলে গেছে প্রশস্ত,
রোজাদার আত্মারা তাঁর পাশে।

তারাবীহ নামাজে আমরা দাঁড়াই এক হয়ে,
যতক্ষণ না শেষ হয় বরকতময় মাস,
প্রতিটি আয়াত তেলাওয়াত, প্রতিটি শ্বাস একটি প্রার্থনা,
আল্লাহর উপস্থিতিতে, তুলনাহীন।

শক্তির রাত, লাইলাতুল কদর,
যখন ফেরেশতারা নেমে আসেন দূর রাজ্য থেকে,
হে সাধক, পবিত্র করো তোমার হৃদয়,
পার্থিব শৃঙ্খল থেকে, এখনই বিদায়।`
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো রিদওয়ান মাহমুদ জিসান"
    },
    type: "poem",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop"
  }
];
