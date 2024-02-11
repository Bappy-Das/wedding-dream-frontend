import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='bg-[#2b2b2c]'>
			<div className="flex justify-center items-center h-screen ">
				<div className="flex mx-auto flex-col max-w-md p-6 shadow-lg rounded-sm sm:p-10 dark:bg-coal dark:text-gray-100">
					<div className="mb-5 text-center ">
						<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
						<p className="text-sm dark:text-gray-400">
							Sign up to access your account
						</p>
					</div>
					<form
						novalidate=""
						action=""
						className="space-y-12 ng-untouched ng-pristine ng-valid"
					>
						<div className="space-y-2">
							<div>
								<label
									for="email"
									className="block mb-2 text-sm"
								>
									Email address
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="leroy@jenkins.com"
									className="w-full px-3 py-2 border rounded-sm dark:border-gray-700 dark:bg-coal dark:text-gray-100"
								/>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label for="password" className="text-sm">
										Password
									</label>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="*****"
									className="w-full px-3 py-2 border rounded-sm dark:border-gray-700 dark:bg-coal dark:text-gray-100"
								/>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label for="password" className="text-sm">
										Confirm Password
									</label>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="*****"
									className="w-full px-3 py-2 border rounded-sm dark:border-gray-700 dark:bg-coal dark:text-gray-100"
								/>
							</div>
						</div>
						<div>
							<div>
								<button
									type="button"
									className="w-full px-8 py-3 font-semibold rounded-sm
                                 text-gray-300 border border-gray-500
                                "
								>
									Sign up
								</button>
							</div>
							<p className="px-6 text-sm text-center dark:text-gray-400">
								Already have an account?
								<Link
									to="/login"
									className="hover:underline dark:text-violet-400"
								>
									Sign in
								</Link>
								.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
