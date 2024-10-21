import {
    faChalkboardTeacher,
    faHandshake,
    faSeedling,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FEATURES_MISSIONS = [
    {
        title: "Peningkatan Keterampilan",
        description:
            "Menyediakan pelatihan yang komprehensif untuk mengembangkan keterampilan individu, sehingga setiap orang siap untuk berkarya dengan profesionalisme.",
        icon: (
            <>
                <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>
            </>
        ),
    },
    {
        title: "Kolaborasi Kesejahteraan",
        description:
            "Membangun kemitraan strategis dengan berbagai instansi, baik swasta maupun pemerintah, untuk mendorong kesejahteraan masyarakat di Kalimantan Barat.",
        icon: (
            <>
                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
            </>
        ),
    },
    {
        title: "Inovasi Berkelanjutan",
        description:
            "Mengembangkan dan mempromosikan teknologi inovatif yang mendukung solusi berkelanjutan, ramah lingkungan, dan mampu menjawab tantangan masa depan.",
        icon: (
            <>
                <FontAwesomeIcon icon={faSeedling}></FontAwesomeIcon>
            </>
        ),
    },
    {
        title: "Kemitraan Inklusif",
        description:
            "Bekerjasama dengan komunitas lokal untuk memastikan bahwa teknologi digital dapat diakses dan dimanfaatkan secara inklusif serta merata bagi seluruh lapisan masyarakat.",
        icon: (
            <>
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
            </>
        ),
    },
];
