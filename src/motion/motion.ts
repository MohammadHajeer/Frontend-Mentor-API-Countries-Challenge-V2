export const filtersVariants: {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
        transition: {
            duration: number;
            staggerChildren: number;
        };
    };
} = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.2,
        },
    },
};

type filterVariantsType = {
    opacity: number;
    scaleY: number;
    transformOrigin: string;
};
export const filterVariants: {
    hidden: filterVariantsType;
    visible: filterVariantsType & {
        transition: { type: string; damping: number };
    };
} = {
    hidden: {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top",
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        transformOrigin: "top",
        transition: {
            type: "spring",
            damping: 5,
        },
    },
};

export const slideToTop: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;
    };
} = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const slide = (direction: string): {
    hidden: {
        opacity: number,
        y: number
        x: number
    }
    visible: {
        opacity: number,
        y: number
        x: number
    }
} => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "top" ? 200 : (direction === "down") ? -200 : 0,
            x: direction === "right" ? -200 : (direction === "left") ? 200 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        }
    }
}

export const searchCountryVariants: {
    hidden: {
        width: string;
    };
    visible: {
        width: string;
        transition: {
            type: string;
            stiffness: number;
            duration: number;
            delay: number;
        };
    };
} = {
    hidden: {
        width: "56px",
    },
    visible: {
        width: "384px",
        transition: {
            type: "spring",
            stiffness: 200,
            duration: 0.5,
            delay: 0.3,
        },
    },
};

type flagVariantsType = {
    opacity: number;
    scale: number;
}

export const flagVariants: {
    hidden: flagVariantsType;
    visible: flagVariantsType;
    tab: flagVariantsType
} = {
    hidden: {
        opacity: 1,
        scale: 1,
    },
    visible: {
        opacity: 0.6,
        scale: 0.95,
    },
    tab: {
        opacity: 1,
        scale: 0.95,
    }
};


export const searchInputAnimation = (rotation: number[]) => {
    return {
        y: [-100, 100, -20, 0],
        opacity: [0, 0, 1],
        rotate: rotation,
    }
}

export const mismatchAlertVariants: {
    hidden: { opacity: number }
    visible: {
        opacity: number
        transition: {
            staggerChildren: number
        }
    }
} = {
    hidden: {
        opacity: 0.2
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}
export const mismatchLettersAlertVariants: {
    hidden: {
        opacity: number
    };
    visible: {
        opacity: number
    }
} = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}