"use client"

import Link from "next/link";
import styles from "./Nav.module.scss";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Nav: React.FC = () => {

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { user, isLogin, checkAccessToken, logOut } = useUserContext();
  const [dropMenu, setDropMenu] = useState<boolean>(false);

  const [sideBarOpen, setSidebarOpen] = useState<boolean>(false);

  // 엑세스 토큰 유효성 검사
  useEffect(() => {
    checkAccessToken();
  }, [isLogin]);

  return (
    <nav className={styles.nav}>
        {
            <div className={`${styles.sidebar} ${sideBarOpen ? styles.open : ""}`} onClick={() => setSidebarOpen(false)}>
              <div className={styles.menuContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="검색어를 입력하세요" />
                    <div className={styles.iconFrame}>
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeMiterlimit="2"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                      fillRule="nonzero"
                    />
                  </svg>
                    </div>
                </div>
                <h3 onClick={() => {setSidebarOpen(false); router.push("/");}}>홈</h3>
                <h3 onClick={() => {setSidebarOpen(false); router.push("/with/us");}}>멘토 찾기</h3>
                <h3 onClick={() => {setSidebarOpen(false); router.push("/my");}}>마이페이지</h3>
                <p onClick={() => {setSidebarOpen(false); router.push("/my");}}>내 정보</p>
                {
                  user?.type === "Mentor" ? 
                  <>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/introduce");}}>내 소개글</p>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/coffeechat");}}>내 커피챗</p>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/review");}}>받은 리뷰</p>
                  </>
                  :
                  <>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/favorite");}}>즐겨찾기</p>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/coffeechat");}}>내 커피챗</p>
                  <p onClick={() => {setSidebarOpen(false); router.push("/my/review");}}>내 리뷰</p>
                  </>
                }
               
              </div>
            </div>
          }
      <section className={styles.wrap}>
          <button
            className={`${styles.hamburgerBtn}`}
            onClick={() => {setSidebarOpen((prev) => !prev); console.log("!");}}
          >
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
          </button>
        <div className={styles.leftMenu}>
        
          <div className={styles.logoContainer}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-13-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
            </svg>
            <Link href={"/"}>MENTALK</Link>
          </div>
          <div className={styles.menuContainer}>
            <Link href={"/with/us"}>멘토 찾기</Link>
          </div>
        </div>

        <div className={styles.rightMenu}>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="검색어를 입력하세요" />
            <div className={styles.iconFrame}>
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeMiterlimit="2"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
          {isLogin ? (
            <div
              className={styles.profileContainer}
              onMouseOver={() => setDropMenu(true)}
              onMouseLeave={() => setDropMenu(false)}
              // onClick={() => setDropMenu(true)}
            >
              <div className={styles.nicknameFrame}>{user?.nickname}</div>
              <div className={styles.profileFrame}>
                <img
                  src={
                    `${API_URL}/${user?.profileImg}` ||
                    "/images/default_profile.png"
                  }
                  alt="프로필 이미지"
                />
                {dropMenu && (
                  <div className={styles.dropdownMenu}>
                    <Link href="/my">마이페이지</Link>
                    <span/>
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={logOut}
                    >로그아웃</label>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.authContainer}>
              <Link href="/login">로그인</Link>
              <span>|</span>
              <Link href="/signup">회원가입</Link>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
