import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'
import Link from 'next/link'

function UserName({ searchParams, data }) {

    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation {...data} />
                </div>

                {/* form card  */}
                <div>
                    <Authintication title="User Name" head="Welcome" slogan="Type your name in the field below.">
                        <Form phone={searchParams?.phone} otp={searchParams?.otp} />
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop>
    )
}

export default UserName