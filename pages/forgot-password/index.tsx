import {useAppSelector} from "hooks/useAppSelector";
import {useRouter} from "next/router";
import {ForgotPassword} from "components/shared";
import {withLayout} from "components/hocs/withLayout";
import React from "react";

const Forgot = () => {
    const { user, isAuth } = useAppSelector((s) => s.auth);
    const { asPath } = useRouter();

    return (
        <>
            <div style={{display:"flex", justifyContent:"center",margin:166}}>
          <ForgotPassword/>
            </div>
        </>
    );
};

export default withLayout(Forgot);