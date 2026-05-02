export function getWaitlistEmailHtml({
  position,
  referralCode,
  language,
  baseUrl,
}: {
  position: number;
  referralCode: string;
  language: "ar" | "en";
  baseUrl: string;
}) {
  const referralUrl = `${baseUrl}/?ref=${referralCode}`;

  if (language === "ar") {
    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>أهلًا بك في هادي</title>
</head>
<body style="margin:0;padding:0;background-color:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <div style="width:56px;height:56px;border-radius:16px;background-color:#248F86;display:inline-flex;align-items:center;justify-content:center;">
                <span style="color:white;font-size:24px;font-weight:bold;line-height:56px;">هـ</span>
              </div>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;padding:48px 40px;text-align:center;">

              <!-- Check Icon -->
              <div style="width:48px;height:48px;border-radius:50%;background-color:rgba(36,143,134,0.12);margin:0 auto 24px;line-height:48px;">
                <span style="color:#248F86;font-size:24px;">✓</span>
              </div>

              <!-- Title -->
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:600;color:#1A1A1A;line-height:1.5;">
                أهلًا بك في هادي
              </h1>

              <!-- Subtitle -->
              <p style="margin:0 0 32px;font-size:16px;color:rgba(26,26,26,0.6);line-height:1.6;">
                تم تسجيلك في قائمة الانتظار بنجاح
              </p>

              <!-- Position Badge -->
              <div style="background-color:rgba(36,143,134,0.08);border-radius:12px;padding:20px;margin-bottom:32px;">
                <p style="margin:0 0 4px;font-size:14px;color:rgba(26,26,26,0.6);">ترتيبك في القائمة</p>
                <p style="margin:0;font-size:36px;font-weight:700;color:#248F86;">#${position}</p>
              </div>

              <!-- Message -->
              <p style="margin:0 0 32px;font-size:16px;color:#1A1A1A;line-height:1.7;">
                سنرسل لك دعوتك فور إطلاق التطبيق.<br>
                كلما شاركت أصدقاءك، تقدّمت في القائمة.
              </p>

              <!-- CTA Button -->
              <a href="${referralUrl}" style="display:inline-block;background-color:#248F86;color:#ffffff;text-decoration:none;font-size:16px;font-weight:500;padding:14px 32px;border-radius:12px;margin-bottom:16px;">
                شارك رابطك وتقدّم في القائمة ←
              </a>

              <!-- Referral Link -->
              <p style="margin:16px 0 0;font-size:13px;color:rgba(26,26,26,0.4);direction:ltr;">
                ${referralUrl}
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;color:rgba(26,26,26,0.6);line-height:1.6;">
                هادي — رفيقك الهادئ نحو أيام أفضل
              </p>
              <p style="margin:0;font-size:12px;color:rgba(26,26,26,0.3);">
                © 2026 هادي. جميع الحقوق محفوظة.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  // English version
  return `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hadi</title>
</head>
<body style="margin:0;padding:0;background-color:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <div style="width:56px;height:56px;border-radius:16px;background-color:#248F86;display:inline-flex;align-items:center;justify-content:center;">
                <span style="color:white;font-size:24px;font-weight:bold;line-height:56px;">H</span>
              </div>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;padding:48px 40px;text-align:center;">

              <!-- Check Icon -->
              <div style="width:48px;height:48px;border-radius:50%;background-color:rgba(36,143,134,0.12);margin:0 auto 24px;line-height:48px;">
                <span style="color:#248F86;font-size:24px;">✓</span>
              </div>

              <!-- Title -->
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:600;color:#1A1A1A;line-height:1.3;letter-spacing:-0.02em;">
                Welcome to Hadi
              </h1>

              <!-- Subtitle -->
              <p style="margin:0 0 32px;font-size:16px;color:rgba(26,26,26,0.6);line-height:1.5;">
                You've been added to the waitlist
              </p>

              <!-- Position Badge -->
              <div style="background-color:rgba(36,143,134,0.08);border-radius:12px;padding:20px;margin-bottom:32px;">
                <p style="margin:0 0 4px;font-size:14px;color:rgba(26,26,26,0.6);">Your position</p>
                <p style="margin:0;font-size:36px;font-weight:700;color:#248F86;">#${position}</p>
              </div>

              <!-- Message -->
              <p style="margin:0 0 32px;font-size:16px;color:#1A1A1A;line-height:1.7;">
                We'll send your invite as soon as we launch.<br>
                Share with friends to move up the list.
              </p>

              <!-- CTA Button -->
              <a href="${referralUrl}" style="display:inline-block;background-color:#248F86;color:#ffffff;text-decoration:none;font-size:16px;font-weight:500;padding:14px 32px;border-radius:12px;margin-bottom:16px;">
                Share your link to skip the line →
              </a>

              <!-- Referral Link -->
              <p style="margin:16px 0 0;font-size:13px;color:rgba(26,26,26,0.4);">
                ${referralUrl}
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;color:rgba(26,26,26,0.6);line-height:1.5;">
                Hadi — Your quiet companion for better days
              </p>
              <p style="margin:0;font-size:12px;color:rgba(26,26,26,0.3);">
                © 2026 Hadi. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
