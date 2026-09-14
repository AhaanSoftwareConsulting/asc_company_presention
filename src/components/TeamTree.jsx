import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "./teamData";

const TeamTree = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const treeRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [treeHeight, setTreeHeight] = useState(0);

  /* =========================================================
     GET CHILDREN
  ========================================================= */

  const getChildren = (parentId) => {
    return teamMembers.filter((member) => member.parentId === parentId);
  };

  /* =========================================================
     AUTO SCALE & FIT (ALWAYS FIT TO SCREEN)
  ========================================================= */

  useLayoutEffect(() => {
    const updateTreeSize = () => {
      if (!containerRef.current || !treeRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const treeWidth = treeRef.current.scrollWidth;
      const treeHeightValue = treeRef.current.scrollHeight;

      if (treeWidth > 0) {
        // স্ক্রিন অনুযায়ী পারফেক্ট স্কেল যাতে স্ক্রোলবার না আসে
        const calculatedScale = (containerWidth - 24) / treeWidth;
        const newScale = Math.min(1, calculatedScale);

        setScale(newScale);
        setTreeHeight(treeHeightValue * newScale);
      }
    };

    updateTreeSize();

    const resizeObserver = new ResizeObserver(() => {
      updateTreeSize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (treeRef.current) {
      resizeObserver.observe(treeRef.current);
    }

    window.addEventListener("resize", updateTreeSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTreeSize);
    };
  }, []);

  /* =========================================================
     ZOOMED & ENLARGED MEMBER CARD
  ========================================================= */

  const MemberCard = ({ member }) => {
    return (
      <button
        type="button"
        onClick={() => navigate(`/team/${member.uniqueId}`)}
        className="group relative flex w-[170px] shrink-0 flex-col items-center outline-none"
      >
        {/* Profile Image (Zoomed / Enlarged: h-24 w-24) */}
        <div
          className="
            relative z-10
            h-24 w-24
            overflow-hidden
            rounded-full
            border-[3px] border-[#DCA32C]
            bg-white
            shadow-xl
            transition-all duration-300
            group-hover:scale-110
            group-hover:shadow-2xl
          "
        >
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Member Card Box */}
        <div
          className="
            relative -mt-6
            w-full
            rounded-[22px]
            bg-[#171717]
            px-3 pb-5 pt-8
            shadow-xl
            transition-all duration-300
            group-hover:-translate-y-2
            group-hover:bg-gradient-to-r
            group-hover:from-[#C48A18]
            group-hover:to-[#DCA32C]
            group-hover:shadow-2xl
          "
        >
          {/* Zoomed Name */}
          <h3 className="truncate text-base font-extrabold text-white text-center">
            {member.name}
          </h3>

          {/* Zoomed Designation */}
          <p className="mt-1 truncate text-xs font-medium text-white/80 text-center">
            {member.designation}
          </p>

          {/* Zoomed View Profile Button */}
          <span
            className="
              mt-3 block
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-[#DCA32C]
              text-center
              transition
              group-hover:text-white
            "
          >
            View Profile →
          </span>
        </div>
      </button>
    );
  };

  /* =========================================================
     RECURSIVE CHILD TREE
  ========================================================= */

  const TreeNode = ({ member }) => {
    const children = getChildren(member.id);

    return (
      <div className="flex shrink-0 flex-col items-center">
        {/* Current Member */}
        <MemberCard member={member} />

        {/* Children */}
        {children.length > 0 && (
          <>
            {/* Parent Downward Line */}
            <div className="h-8 w-px bg-[#DCA32C]/60" />

            {/* Children Row */}
            <div className="flex flex-nowrap justify-center">
              {children.map((child, index) => {
                const isFirst = index === 0;
                const isLast = index === children.length - 1;
                const isOnly = children.length === 1;

                return (
                  <div
                    key={child.uniqueId}
                    className="
                      relative
                      flex
                      shrink-0
                      flex-col
                      items-center
                      px-2 sm:px-3
                    "
                  >
                    {/* Horizontal Connector */}
                    {!isOnly && (
                      <div
                        className={`
                          absolute
                          top-0
                          h-px
                          bg-[#DCA32C]/60

                          ${
                            isFirst
                              ? "left-1/2 w-1/2"
                              : isLast
                                ? "right-1/2 w-1/2"
                                : "left-0 w-full"
                          }
                        `}
                      />
                    )}

                    {/* Child Upward Line */}
                    <div className="relative z-10 h-8 w-px bg-[#DCA32C]/60" />

                    {/* Child Tree */}
                    <TreeNode member={child} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  };

  /* =========================================================
     ROOT MEMBERS
  ========================================================= */

  const rootMembers = getChildren(null);

  const founder = rootMembers.find(
    (member) => member.id === "founder"
  );

  const director = rootMembers.find(
    (member) => member.id === "director"
  );

  /* All children under Founder */
  const mainTeam = founder ? getChildren(founder.id) : [];

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      className="
        min-h-screen
        bg-[#F7F7F5]
        py-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1920px]
          px-2
        "
      >
        {/* =====================================================
            TREE VIEWPORT (NO HORIZONTAL SCROLL)
        ===================================================== */}

        <div ref={containerRef} className="w-full overflow-hidden">
          <div
            style={{
              height: treeHeight ? `${treeHeight}px` : "auto",
            }}
            className="
              relative
              w-full
              transition-all
              duration-300
            "
          >
            <div
              ref={treeRef}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
              className="
                absolute
                left-1/2
                flex
                w-max
                -translate-x-1/2
                flex-col
                items-center
                pb-10
              "
            >
              {/* TOP LEADERS */}
              <div
                className="
                  flex
                  items-start
                  justify-center
                  gap-6
                "
              >
                {founder && (
                  <div className="flex shrink-0 flex-col items-center">
                    <MemberCard member={founder} />
                  </div>
                )}

                {director && (
                  <div className="flex shrink-0 flex-col items-center">
                    <MemberCard member={director} />
                  </div>
                )}
              </div>

              {/* COMMON CONNECTOR */}
              {mainTeam.length > 0 && (
                <div
                  className="
                    relative
                    h-14
                    w-[370px]
                  "
                >
                  <div
                    className="
                      absolute
                      left-[85px]
                      top-0
                      h-7
                      w-px
                      bg-[#DCA32C]/60
                    "
                  />

                  <div
                    className="
                      absolute
                      right-[85px]
                      top-0
                      h-7
                      w-px
                      bg-[#DCA32C]/60
                    "
                  />

                  <div
                    className="
                      absolute
                      left-[85px]
                      right-[85px]
                      top-7
                      h-px
                      bg-[#DCA32C]/60
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-7
                      h-7
                      w-px
                      -translate-x-1/2
                      bg-[#DCA32C]/60
                    "
                  />
                </div>
              )}

              {/* MAIN TEAM */}
              {mainTeam.length > 0 && (
                <div className="flex flex-nowrap justify-center">
                  {mainTeam.map((member, index) => {
                    const isFirst = index === 0;
                    const isLast = index === mainTeam.length - 1;
                    const isOnly = mainTeam.length === 1;

                    return (
                      <div
                        key={member.uniqueId}
                        className="
                          relative
                          flex
                          shrink-0
                          flex-col
                          items-center
                          px-2 sm:px-3
                        "
                      >
                        {!isOnly && (
                          <div
                            className={`
                              absolute
                              top-0
                              h-px
                              bg-[#DCA32C]/60

                              ${
                                isFirst
                                  ? "left-1/2 w-1/2"
                                  : isLast
                                    ? "right-1/2 w-1/2"
                                    : "left-0 w-full"
                              }
                            `}
                          />
                        )}

                        <div
                          className="
                            relative
                            z-10
                            h-8
                            w-px
                            bg-[#DCA32C]/60
                          "
                        />

                        <TreeNode member={member} />
                      </div>
                    );
                  })}
                </div>
              )}

              {/* FALLBACK */}
              {rootMembers.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-gray-500">
                    No team members found.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTree;