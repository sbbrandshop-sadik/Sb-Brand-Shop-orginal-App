/* =====================================================
   SB BRAND SHOP - Shop Language (i18n)
   Admin Panel > Settings > Language দিয়ে এটা control হয়।
   Default: English। Settings-এ "Bangla" করলে customer-facing
   pages (home, product, cart, order, profile, login) Bangla হবে।
   ===================================================== */
(function () {
    const DICT = {
        en: {
            // common
            loading: 'Loading...',
            emptyMsg: 'No products found',
            loadFailed: 'Failed to load',
            productsOf: 'Products',
            searchSuffix: ' results',
            // home
            searchPlaceholder: 'Search your favorite product...',
            categoryTitle: 'Product Categories',
            offerTitle: 'Special Offers',
            allProductsTitle: 'All Our Products',
            addToCart: 'Add to Cart',
            buyNow: 'Order Now',
            addedToCart: '✅ Added to cart!',
            // nav
            navHome: 'Home',
            navReels: 'Reels',
            navCart: 'Cart',
            navProfile: 'Profile',
            // product page
            pdTitle: 'Product Details',
            specTitle: 'Specifications',
            descTitle: 'Full Description',
            freeDelivery: 'Free Delivery',
            pdNotFound: 'Product not found',
            pdPending: 'This product has not been published yet.',
            // cart
            cartTitle: '🛒 My Cart',
            cartEmpty: 'Your cart is empty!',
            startShopping: 'Start Shopping →',
            totalItems: 'Total Items',
            deliveryRow: 'Delivery Charge',
            free: 'Free',
            grandTotal: 'Grand Total',
            cartOrderBtn: 'Place Order',
            deliveryInfo: '📦 Delivery Information',
            yourName: 'Your Name *',
            namePh: 'Full name',
            phone: 'Phone Number *',
            phonePh: '01XXXXXXXXX',
            address: 'Delivery Address *',
            addressPh: 'House/Flat, Road, Area, District',
            cancel: 'Cancel',
            confirmOrder: '✅ Confirm Order',
            orderingNow: 'Placing order...',
            fillAll: 'Please fill in all information',
            orderSuccessAlert: '✅ Your order has been placed successfully! We will contact you soon.',
            orderFailAlert: 'Order failed. Please try again.',
            loginRequired: 'You need to log in to place an order. Log in now?',
            // order page
            orderTitle: 'Order Now',
            selectQty: 'Select Quantity',
            yourInfo: '👤 Your Information',
            fullName: 'Full Name *',
            fullNamePh: 'Enter your full name',
            altPhone: 'Alternate Phone (optional)',
            deliveryAddressTitle: '📍 Delivery Address',
            deliveryZone: 'Delivery Area *',
            insideDhaka: 'Inside Dhaka District',
            outsideDhaka: 'Outside Dhaka District',
            areaThana: 'Area / Thana Name *',
            areaPh: 'e.g.: Mirpur, Dhaka',
            fullAddress: 'Full Address *',
            addressPh2: 'House/Flat no, Road, Area...',
            paymentMethod: '💳 Payment Method',
            payCod: 'Cash on Delivery',
            payBkash: 'bKash',
            payNagad: 'Nagad',
            orderSummary: 'Order Summary',
            productPrice: 'Product Price',
            qtyLabel: 'Quantity',
            placeOrderBtn: '✅ Confirm Order',
            orderSuccessTitle: 'Order placed successfully!',
            orderSuccessMsg: 'Your order has been accepted successfully.<br>We will contact you soon. 😊',
            orderNoLabel: 'Order No: ',
            backHome: '← Back to Home',
            loginNotice: 'Log in to track your order. You can also order as a guest.',
            freeDeliveryNote: 'Free delivery applies to this product!',
            helpLine: 'Call us anytime: ',
            // profile
            profileTitle: '👤 My Profile',
            notLogged: 'You are not logged in yet',
            loginRegister: 'Login / Register',
            myOrders: 'My Orders',
            noOrders: 'No orders yet',
            ordersLoadFail: 'Failed to load orders',
            logout: 'Logout',
            merchantBtn: 'Become a Merchant',
            myStore: 'My Store',
            // merchant modal
            mRegTitle: '🏪 Merchant Registration',
            mRegNote: 'Fill in the information below to sell your own products in our shop. Both sides of your Bangladesh NID card are required. After admin approval, your products will be published in the shop.',
            mName: 'Your Name or Shop Name *',
            mNamePh: 'Full name / shop name',
            mPhone: 'Phone Number *',
            mEmail: 'Email *',
            mAddress: 'Address *',
            mAddressPh: 'House, Road, Area, District',
            mNidFront: 'NID Card — Front Side *',
            mNidBack: 'NID Card — Back Side *',
            nidClick: 'Click here to upload image',
            register: '🏪 Register',
            // statuses
            statusPending: '⏳ Pending',
            statusProcessing: '🔄 Processing',
            statusDelivered: '✅ Delivered',
            statusCancelled: '❌ Cancelled',
            // login
            account: '👤 Your Account',
            tabLogin: 'Login',
            tabRegister: 'Register',
            email: 'Email',
            emailPh: 'example@gmail.com',
            password: 'Password',
            passwordPh: 'Your password',
            loginBtn: 'Login',
            registerBtn: 'Register',
            loginToProfile: 'Please log in to view your profile',
            regName: 'Full Name',
            regNamePh: 'Your name',
            regPhone: 'Phone Number',
            regPassword: 'Password (at least 6 characters)',
            backHomeLink: '← Back to Home',
            // login errors
            errFill: 'Please fill in all information',
            errCred: 'Incorrect email or password',
            errPassShort: 'Password must be at least 6 characters',
            errEmailUsed: 'This email is already registered',
            errRegFail: 'Registration failed',
            loadingDots: 'Loading...'
        },
        bn: {
            loading: 'লোড হচ্ছে...',
            emptyMsg: 'কোনো প্রোডাক্ট পাওয়া যায়নি',
            loadFailed: 'লোড হয়নি',
            productsOf: 'প্রোডাক্ট',
            searchSuffix: ' এর ফলাফল',
            searchPlaceholder: 'পছন্দের প্রোডাক্ট খুঁজুন...',
            categoryTitle: 'প্রোডাক্ট ক্যাটাগরি',
            offerTitle: 'বিশেষ মূল্য ছাড় (Offers)',
            allProductsTitle: 'আমাদের সব প্রোডাক্ট',
            addToCart: 'কার্টে যোগ করুন',
            buyNow: 'অর্ডার করুন',
            addedToCart: '✅ কার্টে যোগ হয়েছে!',
            navHome: 'হোম',
            navReels: 'রিলস',
            navCart: 'কার্ট',
            navProfile: 'প্রোফাইল',
            pdTitle: 'প্রোডাক্ট বিস্তারিত',
            specTitle: 'স্পেসিফিকেশন',
            descTitle: 'বিস্তারিত বিবরণ',
            freeDelivery: 'ফ্রি ডেলিভারি',
            pdNotFound: 'প্রোডাক্ট পাওয়া যায়নি',
            pdPending: 'এই প্রোডাক্ট এখনো প্রকাশিত হয়নি।',
            cartTitle: '🛒 আমার কার্ট',
            cartEmpty: 'আপনার কার্ট খালি!',
            startShopping: 'কেনাকাটা শুরু করুন →',
            totalItems: 'মোট আইটেম',
            deliveryRow: 'ডেলিভারি চার্জ',
            free: 'ফ্রি',
            grandTotal: 'সর্বমোট',
            cartOrderBtn: 'অর্ডার করুন',
            deliveryInfo: '📦 ডেলিভারি তথ্য দিন',
            yourName: 'আপনার নাম *',
            namePh: 'পূর্ণ নাম',
            phone: 'ফোন নম্বর *',
            phonePh: '01XXXXXXXXX',
            address: 'ডেলিভারি ঠিকানা *',
            addressPh: 'বাড়ি/ফ্লাট নম্বর, রোড, এলাকা, জেলা',
            cancel: 'বাতিল',
            confirmOrder: '✅ অর্ডার নিশ্চিত',
            orderingNow: 'অর্ডার হচ্ছে...',
            fillAll: 'সব তথ্য পূরণ করুন',
            orderSuccessAlert: '✅ আপনার অর্ডার সফল হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।',
            orderFailAlert: 'অর্ডার ব্যর্থ হয়েছে। আবার চেষ্টা করুন।',
            loginRequired: 'অর্ডার করতে লগইন করতে হবে। এখনই লগইন করবেন?',
            orderTitle: 'অর্ডার করুন',
            selectQty: 'পরিমাণ নির্বাচন করুন',
            yourInfo: '👤 আপনার তথ্য',
            fullName: 'পূর্ণ নাম *',
            fullNamePh: 'আপনার পূর্ণ নাম লিখুন',
            altPhone: 'বিকল্প ফোন (ঐচ্ছিক)',
            deliveryAddressTitle: '📍 ডেলিভারি ঠিকানা',
            deliveryZone: 'ডেলিভারি এলাকা *',
            insideDhaka: 'ঢাকা জেলার ভিতরে',
            outsideDhaka: 'ঢাকা জেলার বাইরে',
            areaThana: 'এলাকা / থানার নাম *',
            areaPh: 'যেমন: মিরপুর, ঢাকা',
            fullAddress: 'বিস্তারিত ঠিকানা *',
            addressPh2: 'বাড়ি/ফ্লাট নম্বর, রোড, এলাকা...',
            paymentMethod: '💳 পেমেন্ট পদ্ধতি',
            payCod: 'ক্যাশ অন ডেলিভারি',
            payBkash: 'বিকাশ',
            payNagad: 'নগদ',
            orderSummary: 'অর্ডার সারসংক্ষেপ',
            productPrice: 'প্রোডাক্ট মূল্য',
            qtyLabel: 'পরিমাণ',
            placeOrderBtn: '✅ অর্ডার নিশ্চিত করুন',
            orderSuccessTitle: 'অর্ডার সফল হয়েছে!',
            orderSuccessMsg: 'আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।<br>আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। 😊',
            orderNoLabel: 'অর্ডার নম্বর: ',
            backHome: '← হোমে ফিরে যান',
            loginNotice: 'অর্ডার track করতে লগইন করুন। Guest হিসেবেও অর্ডার করা যাবে।',
            freeDeliveryNote: 'এই প্রোডাক্টে ফ্রি ডেলিভারি প্রযোজ্য!',
            helpLine: 'যেকোনো প্রয়োজনে কল করুন: ',
            profileTitle: '👤 আমার প্রোফাইল',
            notLogged: 'আপনি এখনো লগইন করেননি',
            loginRegister: 'লগইন / রেজিস্ট্রেশন করুন',
            myOrders: 'আমার অর্ডার সমূহ',
            noOrders: 'এখনো কোনো অর্ডার নেই',
            ordersLoadFail: 'অর্ডার লোড হয়নি',
            logout: 'লগআউট',
            merchantBtn: 'মার্চেন্ট হন',
            myStore: 'আমার স্টোর',
            mRegTitle: '🏪 মার্চেন্ট রেজিস্ট্রেশন',
            mRegNote: 'আপনার নিজের প্রোডাক্ট আমাদের শপে বিক্রি করতে নিচের তথ্য দিন। বাংলাদেশের NID কার্ডের দুই দিকের ছবি দিতে হবে। অ্যাডমিন অনুমোদনের পর প্রোডাক্ট শপে দেখাবে।',
            mName: 'আপনার নাম বা শপের নাম *',
            mNamePh: 'পূর্ণ নাম / শপের নাম',
            mPhone: 'ফোন নম্বর *',
            mEmail: 'ইমেইল *',
            mAddress: 'ঠিকানা *',
            mAddressPh: 'বাড়ি, রোড, এলাকা, জেলা',
            mNidFront: 'NID কার্ড — সামনের দিক *',
            mNidBack: 'NID কার্ড — পেছনের দিক *',
            nidClick: 'ছবি আপলোড করতে এখানে ক্লিক করুন',
            register: '🏪 রেজিস্টার করুন',
            statusPending: '⏳ অপেক্ষমান',
            statusProcessing: '🔄 প্রক্রিয়াধীন',
            statusDelivered: '✅ ডেলিভারি হয়েছে',
            statusCancelled: '❌ বাতিল',
            account: '👤 আপনার অ্যাকাউন্ট',
            tabLogin: 'লগইন',
            tabRegister: 'রেজিস্ট্রেশন',
            email: 'ইমেইল',
            emailPh: 'example@gmail.com',
            password: 'পাসওয়ার্ড',
            passwordPh: 'আপনার পাসওয়ার্ড',
            loginBtn: 'লগইন করুন',
            registerBtn: 'রেজিস্টার করুন',
            loginToProfile: 'প্রোফাইল দেখতে লগইন করুন',
            regName: 'পূর্ণ নাম',
            regNamePh: 'আপনার নাম',
            regPhone: 'ফোন নম্বর',
            regPassword: 'পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)',
            backHomeLink: '← হোমে ফিরে যান',
            errFill: 'সব তথ্য পূরণ করুন',
            errCred: 'ইমেইল বা পাসওয়ার্ড ভুল',
            errPassShort: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে',
            errEmailUsed: 'এই ইমেইল আগেই registered',
            errRegFail: 'রেজিস্ট্রেশন ব্যর্থ হয়েছে',
            loadingDots: 'লোড হচ্ছে...'
        }
    };

    function currentLang() {
        try { return localStorage.getItem('sb_shop_lang') === 'bn' ? 'bn' : 'en'; }
        catch (e) { return 'en'; }
    }

    function t(key) {
        const l = currentLang();
        return (DICT[l] && DICT[l][key]) || DICT.en[key] || key;
    }

    function applyI18n() {
        document.documentElement.lang = currentLang();
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = t(el.getAttribute('data-i18n'));
            if (v) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const v = t(el.getAttribute('data-i18n-ph'));
            if (v) el.setAttribute('placeholder', v);
        });
    }

    // Settings > Language থেকে language লোড করে apply করে (har module page call করবে)
    async function initShopLang(getSettings) {
        try {
            const s = await getSettings();
            if (s && (s.language === 'bn' || s.language === 'en')) {
                localStorage.setItem('sb_shop_lang', s.language);
            }
        } catch (e) {}
        applyI18n();
        return currentLang();
    }

    window.APP_I18N = { DICT, currentLang, t, applyI18n, initShopLang };
})();
