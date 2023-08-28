import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

const AccountInfo = () => {
  return (
    <>
      <div className="account-info">
        <h2>لوحة التحكم :</h2>
        <p>
          من لوحة التحكم في حسابك يمكنك عرض
          <Link href="/">
            <a className="p-link"> الطلبات الأخيرة</a>
          </Link>
          , إدارة الخاص بك تفاصيل الحساب و
          <Link href="/">
            <a className="p-link">تغيير كلمة المرور.</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default AccountInfo;
