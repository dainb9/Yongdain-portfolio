# Design Direction: Professional Portfolio Website

사용자의 구체적인 요구사항("Apple-like Glass Header", "미니멀 그리드", "Soft Shadow", "억제된 컬러 팔레트")을 바탕으로 디자인 시스템을 정의합니다.

## Core Design Philosophy: "Crystal Clear Professionalism"

### 1. Design Movement: Modern Minimalist with Glassmorphism
*   **Aesthetic:** 깨끗하고 투명한 느낌의 유리를 모티브로 하여, 신뢰감과 현대적인 기술력을 표현합니다. Apple의 디자인 언어와 유사한 정제된 미니멀리즘을 추구합니다.
*   **Vibe:** 차분함, 지적임, 명료함.

### 2. Core Principles
*   **Content First:** 장식적인 요소보다는 콘텐츠(이력, 프로젝트)의 가독성을 최우선으로 합니다.
*   **Subtle Depth:** 과도한 그림자 대신, 아주 부드러운 Soft Shadow와 블러(Blur) 효과를 사용하여 깊이감을 줍니다.
*   **Responsive & Accessible:** 모든 기기에서 완벽하게 보이며, 스크린 리더 사용자를 포함한 모든 사용자가 접근 가능하도록 합니다.

### 3. Color Philosophy
*   **Palette:** "Ink & Paper" 컨셉의 억제된 컬러 팔레트.
    *   **Background:** 순백색(White) 또는 아주 옅은 회색(Off-white)으로 종이 질감을 연상시킵니다.
    *   **Foreground (Ink):** 완전한 검정보다는 짙은 차콜(Charcoal) 색상을 사용하여 눈의 피로를 줄입니다.
    *   **Accent:** 신뢰를 상징하는 딥 블루(Deep Blue) 또는 인텔리전트한 느낌의 슬레이트 블루(Slate Blue)를 포인트로 사용합니다.
    *   **Glass:** 반투명한 흰색 배경에 배경 블러(Backdrop Blur)를 적용하여 유리 질감을 냅니다.

### 4. Layout Paradigm
*   **Grid System:** 유연한 반응형 그리드를 기반으로 하되, 섹션 간의 여백(Whitespace)을 충분히 두어 시원한 느낌을 줍니다.
*   **Card UI:** 프로젝트와 이력 사항은 카드 형태로 정리하여 정보의 단위를 명확히 합니다.

### 5. Signature Elements
*   **Glass Header:** 스크롤 시 배경이 블러 처리되는 반투명 헤더.
*   **Skill Chips:** 둥근 모서리의 칩 형태로 기술 스택을 시각화.
*   **Radar Chart:** 기술 역량을 한눈에 보여주는 세련된 레이더 차트.

### 6. Typography System
*   **Font Pairing:**
    *   **Headings:** `Inter` 또는 `SF Pro Display` (시스템 폰트) - 모던하고 깔끔한 산세리프. (사용자 요청에 따라 Inter 지양, 시스템 산세리프 활용) -> `system-ui`, `-apple-system`, `BlinkMacSystemFont` 등 활용하여 네이티브 느낌 강조.
    *   **Body:** 가독성이 높은 산세리프 폰트.
*   **Hierarchy:** 크기와 굵기(Bold, Medium, Regular)를 통해 정보의 위계를 명확히 구분합니다.

### 7. Animation Guidelines
*   **Micro-interactions:** 버튼 호버 시 부드러운 색상 변화나 살짝 떠오르는 효과.
*   **Scroll Animations (AOS):** 섹션이 화면에 들어올 때 과하지 않게 페이드인(Fade-in) 되거나 아래에서 위로 살짝 올라오는(Slide-up) 효과.

## Implementation Details

*   **Header:** `backdrop-filter: blur(10px)` 활용. 스크롤 이벤트 리스너로 높이 및 투명도 조절.
*   **Resume:** 인쇄 시(`@media print`) 레이아웃이 A4 용지에 최적화되도록 CSS 조정 (불필요한 요소 숨김, 폰트 크기 조정).
*   **Projects:** CSS Grid를 사용하여 반응형 카드 레이아웃 구현. 모달은 `Dialog` 컴포넌트 활용.
*   **Accessibility:** 시맨틱 태그(`nav`, `main`, `section`, `article`, `footer`) 사용, `aria-label` 적절히 배치, 키보드 포커스 스타일링.
