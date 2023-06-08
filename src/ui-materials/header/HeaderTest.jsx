import React from "react";

const HeaderTest = () => {
    return(<header>
        <nav
          className={`relative flex w-full items-center justify-between bg-slate-600 py-2 text-white shadow-lg 
          focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap 
          md:justify-start`}
          data-te-navbar-ref>
            <div className="overflow-auto">
                <a className="mx-2" href="/">Home</a>
                {/* <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a> */}

            </div>
        </nav>
    </header>
    )
}

export default HeaderTest;