export default function winner() {smilesList.reduce((acc, smile) => {
    return smile.count > acc.count ? smile : acc;
}, { count: 0 })}
