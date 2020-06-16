import { useRef, useState, useEffect } from "react";

const useIntersectionObserver = () => {
    const observer = useRef<IntersectionObserver>();
    const [node, setNode] = useState<HTMLElement>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries, server) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const source = entry.target.getAttribute("data-src");
                        entry.target.setAttribute("src", source);
                        observer.current.unobserve(node);
                    }
                });
            },
            {
                threshold: 1,
            }
        );


        if (node) {
            observer.current.observe(node);
        }

        return () => observer.current.disconnect();
    }, [node]);

    return setNode;
};

export default useIntersectionObserver;