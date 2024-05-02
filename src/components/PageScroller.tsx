"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import ReactFullpage from "@fullpage/react-fullpage";

const PageScroller = () => {
  return (
    <ReactFullpage
      navigation
      credits={{
        enabled: true,
        label: "",
      }}
      scrollHorizontally={true}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section ">
            <Introduction />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default PageScroller;
