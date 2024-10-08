// /pages/exhibitor-profile/[slug].tsx
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { ExhibitorProfile } from '@/constants/data';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Profile {
    id: number;
    name: string;
    slug: string;
    cardImage: string;
    items: [];
}

interface ProfilePageProps {
    profile: Profile;
}

const ExhibitorProfilePage = ({ profile }: ProfilePageProps) => {
    const router = useRouter();

    // If the page is not yet generated
    if (router.isFallback) {
        return <SpinnerComponent />;
    }

    return (

        <div className="exhibitors-page-wrapper">
            <div className="container">
                <ul className='d-flex gap-2 mt-4'>
                    <li className='text-white'>
                        <Link href="/exhibitors-profile">
                            Exhibitors Profile
                        </Link>
                    </li>
                    <li className='text-white'>/</li>
                    <li className='text-gradient'>{profile.name}</li>
                </ul>
                <div className='banner-wrapper'>
                    <img src={profile.cardImage} alt={profile.name} className='banner-image' />
                </div>
                <h1 className="section-heading text-gradient text-center mt-5">
                    {profile.name}
                </h1>

                <div className="profile-content-wrapper mt-5">
                    {profile.items.map((item: any, index: number) => {
                        return (
                            <div className="profile-detail-card">
                                <img src={profile.cardImage} alt={profile.name} className="profile-image" />
                                <p className="profile-name text-white">{item.name}.</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

// Generates paths for all exhibitors
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = ExhibitorProfile.map((profile) => ({
        params: { slug: profile.slug },
    }));

    return { paths, fallback: true }; // fallback true for dynamic content
};

// Fetches profile data based on slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const profile = ExhibitorProfile.find(
        (item) => item.slug === params?.slug
    );

    if (!profile) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            profile,
        },
    };
};

export default ExhibitorProfilePage;
