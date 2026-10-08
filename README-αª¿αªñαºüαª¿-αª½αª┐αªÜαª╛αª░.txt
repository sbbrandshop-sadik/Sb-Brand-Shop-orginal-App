=====================================================
SB BRAND SHOP — নতুন Merchant System (আপডেট সেট)
=====================================================

কোন কোন ফাইল বদলাল / নতুন হল:

1. profile.html        (বদলানো হয়েছে)
   - লগইন ইউজারের প্রোফাইলে নতুন "মার্চেন্ট হন" বাটন
   - বাটনে ক্লিক করলে form আসবে: নাম, ফোন, ইমেইল, NID কার্ড ছবি আপলোড
   - NID ছবি Cloudinary-তে আপলোড হয়, info-টা Firestore-এর 'merchants' collection-এ save হয়
   - রেজিস্টার করলেই সাথে সাথে merchant panel-এ নিয়ে যায়
   - আগে থেকে রেজিস্টার করা থাকলে বাটনের জায়গায় "আমার স্টোর" লিংক দেখাবে

2. merchant.html       (নতুন ফাইল — মার্চেন্ট প্যানেল)
   - মার্চেন্ট শুধুমাত্র এই প্যানেলে ঢুকতে পারে (লগইন + merchants collection-এ entry থাকতে হয়)
   - বাম পাশে vertical sidebar:
        • ড্যাশবোর্ড        → আমার প্রোডাক্ট / অর্ডার / আয়
        • প্রোডাক্ট যোগ    → নিজের প্রোডাক্ট add (Cloudinary image upload)
        • আমার প্রোডাক্ট   → শুধু তার OWN প্রোডাক্ট edit/delete (অন্যের প্রোডাক্ট edit করা যায় না)
        • ক্যাটাগরি রিকোয়েস্ট → নতুন ক্যাটাগরির জন্য request পাঠানো যায়
   - মার্চেন্ট added/product-এ sellerId + sellerName save হয়

3. admin.html          (পুরো re-design)
   - আগের উপরের tab গুলো এখন বাম পাশে vertical sidebar-এ সাজানো
   - নতুন ২টা tab যোগ হয়েছে:
        • All Merchants  → সব মার্চেন্টের লিস্ট (নাম, ফোন, ইমেইল, NID ছবি, যোগদানের তারিখ,
                            কতগুলো প্রোডাক্ট দেয়, status)
                            NID ছবিতে ক্লিক করে বড় করে দেখা যায়
                            Block / Unblock / Delete বাটন
                            + নিচে মার্চেন্টদের Category Request — Approve করলে
                              সাথে সাথে শপের Categories-তে তৈরি হয়ে যায়, Reject করাও যায়
        • Settings       → ডেলিভারি চার্জ (ঢাকার ভিতরে/বাইরে), শপ ফোন, ইমেইল,
                            ফেসবুক লিংক, ঠিকানা
   - প্রোডাক্ট লিস্টে মার্চেন্টের প্রোডাক্টে "🏪 মার্চেন্টের নাম" দেখাবে
   - ড্যাশবোর্ডে নতুন stat: মোট মার্চেন্ট, পেন্ডিং রিকোয়েস্ট
   - All Merchants tab-এর পাশে লাল badge-তে পেন্ডিং রিকোয়েস্টের সংখ্যা
   - ⚠️ মূল অ্যাডমিন একই আছে: sadikul.pcml@gmail.com
     (আরেক email দিয়ে ঢুকলে "Admin access নেই" দেখাবে)

4. order.html          (বদলানো হয়েছে)
   - ডেলিভারি চার্জ এখন Admin > Settings থেকে read করে (আগে fixed ছিল 80/130)
   - Settings-এ ফোন দিলে অর্ডার সফল হলে হেল্পলাইন নম্বর দেখাবে

5. বাকি ফাইল (index, product, cart, login, style.css, firebase-config.js) — কোনো change নেই,
   আপনার আগের ফাইলগুলোই আছে।

=====================================================
DEPLOY করার নিয়ম (আপনার Firebase-তে)
=====================================================

আপনার আগের যেভাবে site টা Firebase Hosting-এ deploy করছিলেন, সেভাবেই
sbshop ফোল্ডারের পুরো ফাইল গুলো hosting folder-এ copy করে:

    firebase deploy --only hosting

(বা Firebase Console > Hosting > Deploy করলেও হবে)

Deploy করার পর:
1. Profile-এ লগইন করুন → "মার্চেন্ট হন" বাটন পাবেন
2. Test merchant হিসেবে একটা account রেজিস্টার করে দেখুন
3. আপনার admin email-এ লগইন করে admin.html-এ "All Merchants" tab দেখুন

=====================================================
Firestore-এ নতুন collection গুলো (আপনাকে manually বানাতে হবে না,
প্রথম entry দিলে auto তৈরি হবে):
=====================================================
  • merchants          → মার্চেন্ট রেজিস্ট্রেশন
  • categoryRequests   → মার্চেন্টের ক্যাটাগরি request

Firestore Rules নোটিশ:
আপনার বর্তমান rules সব client থেকে allow করে (test mode-এর মতো)।
Live-এ রাখতে চাইলে Firebase Console > Firestore > Rules-এ
শুধু orders create ও নিজের data read-এ restrict করার দিকে একটু লক্ষ্য করুন।
(এটা separate কাজ, চাইলে বলুন করে দেব।)
