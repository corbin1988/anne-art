import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import Router from 'next/router'
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import LoadingContainer from '../components/LoadingContainer';

export const withProtected = (Component: any) => {
	return function WithProtected(props: any) {

		const [loaded, setLoaded] = useState(false);
		
		const isAdmin = () => {
			onAuthStateChanged(auth, async (user) => {

				if(user?.uid === undefined) return Router.push('/');;
				
				const authUser = await getDoc(doc(db, "users", user.uid));

				if (!authUser.exists()) {
					setLoaded(true) 
					Router.push('/');
				}

				if (!authUser.data()?.isAdmin || authUser.data()?.isAdmin === undefined) {
					setLoaded(true)
					return Router.push('/');
				}

			});
			setLoaded(true)
		}

		useEffect(() => {
			isAdmin();
		}, []);

		if(!loaded) return <LoadingContainer />
		
		return <Component  {...props} />;
	};
}

export default withProtected;